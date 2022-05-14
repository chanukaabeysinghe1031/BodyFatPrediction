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

weight_normalizer = layers.experimental.preprocessing.Normalization(input_shape=[1,], axis=None)
weight_normalizer.adapt(weight)

# Build the Keras Sequential Model
body_fat_model_1 = tf.keras.Sequential([
    weight_normalizer,
    layers.Dense(units=1)
])

body_fat_model_1 .summary()
predictions_1 = body_fat_model_1.predict(weight[:10])
print(predictions_1)

body_fat_model_1.compile(
    optimizer=tf.optimizers.Adam(learning_rate=0.1),
    loss='mean_absolute_error')

# Train the model
history = body_fat_model_1.fit(
    train_features['Weight'],
    train_labels,
    epochs=100,
    # Suppress logging.
    verbose=0,
    # Calculate validation results on 20% of the training data.
    validation_split = 0.2)

hist = pd.DataFrame(history.history)
hist['epoch'] = history.epoch
print(hist)

def plot_loss(history):
  plt.plot(history.history['loss'], label='loss')
  plt.plot(history.history['val_loss'], label='val_loss')
  plt.ylim([0, 10])
  plt.xlabel('Epoch')
  plt.ylabel('Error [MPG]')
  plt.legend()
  plt.grid(True)
  plt.show()

plot_loss(history)

