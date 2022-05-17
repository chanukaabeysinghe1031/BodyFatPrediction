from flask import Flask , jsonify , request
from keras.models import load_model

app = Flask(__name__)

def getModel():
    global model
    model=load_model('body_fat_model.h5')
    print("*! Model loaded")

print("========================== Loading custom model ===============================")
getModel()

@app.route('/',methods=['GET'])
def index():
    return jsonify({"API":"This is the python API for getting the predictions from the models"})

@app.route('/predictBodyFat',methods=['POST'])
def getBodyPrediction():
    data = request.get_json(force=True)
    encoded = data['modelInput']
    prediction = model.predict(encoded).tolist()
    response = {
        'prediction': prediction[0]
    }
    return jsonify({"You Sent": response}), 201

if __name__ == "__main__":
    app.run(debug=True)
