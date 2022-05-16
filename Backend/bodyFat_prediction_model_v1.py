# =====================================================
# ========= MODEL TO PREDICT BODY FAT LEVEL ===========
# =====================================================

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import csv

# Make NumPy printouts easier to read.
np.set_printoptions(precision=3, suppress=True)

# Read from the CSV file
file = open('bodyfat.csv')
df = pd.read_csv(file)
print(df.tail())

# Split the dataset to train dataset and test dataset
train_dataset = df.sample(frac=0.8, random_state=0)
test_dataset = df.drop(train_dataset.index)

sns.pairplot(train_dataset[['Density', 'BodyFat', 'Age', 'Weight','Height','Knee','Ankle']], diag_kind='kde')

# Split features from the labels

train_features = train_dataset.copy()
test_features = test_dataset.copy()

train_labels = train_features.pop('BodyFat')
test_labels = test_features.pop('BodyFat')

train_dataset.describe().transpose()[['mean', 'std']]

# The Normalization layer
# The first step is to create the layer:
normalizer = tf.keras.layers.experimental.preprocessing.Normalization(axis=-1)

# Then, fit the state of the preprocessing layer to the data by calling Normalization.adapt:
normalizer.adapt(np.array(train_features))

# Calculate the mean and variance, and store them in the layer:
print(normalizer.mean.numpy())

# When the layer is called, it returns the input data, with each feature independently normalized:
first = np.array(train_features[:1])

with np.printoptions(precision=2, suppress=True):
  print('First example:', first)
  print()
  print('Normalized:', normalizer(first).numpy())

# Linear regression with one variable
weight = np.array(train_features['Weight'])

normalizer = layers.experimental.preprocessing.Normalization(input_shape=[14,], axis=None)
normalizer.adapt(train_features)

# Build the Keras Sequential Model
def build_and_compile_model(norm):
  model = keras.Sequential([
      norm,
      layers.Dense(64, activation='relu'),
      layers.Dense(64, activation='relu'),
      layers.Dense(1)
  ])
  model.compile(loss='mean_absolute_error',
                optimizer=tf.keras.optimizers.Adam(0.000000001))
  return model

dnn_bodyFat_model = build_and_compile_model(normalizer)
dnn_bodyFat_model .summary()
predictions_1 = dnn_bodyFat_model.predict(train_features)
print(predictions_1)

dnn_bodyFat_model.compile(
    optimizer=tf.optimizers.Adam(learning_rate=0.1),
    loss='mean_absolute_error')

# # Train the model
history = dnn_bodyFat_model.fit(
    train_features,
    train_labels,
    epochs=100,
    # Suppress logging.
    verbose=0,
    # Calculate validation results on 20% of the training data.
    validation_split = 0.2)

hist = pd.DataFrame(history.history)
hist['epoch'] = history.epoch
print(hist)

dnn_bodyFat_model.save('body_fat_model.h5')
