const UserFatLevelRecords = require('../models/userFatLevelRecord')
const request = require('request-promise')

PYTHON_FLASK_API_URL = "http://127.0.0.1:5000/"
exports.predictBodyFatLevel = (req,res) => {
    const {
        userId,age, weight,height,neck,chest,abdomen,hip,knee,thigh,ankle,biceps,forearm,wrist
     } = req.body 

    if(userId===""||age===""|| weight===""||height===""||neck===""
        ||chest===""||abdomen===""||hip===""||knee===""||thigh===""
        ||ankle===""||biceps===""||forearm===""||wrist===""){
            res.json({Status: "Unsuccessful", Message: "All the data must be entered."})
    }else{
        // Take the prediction for the body fat level from the flask api
        const options = {
            method: 'POST',
            uri: PYTHON_FLASK_API_URL+'predictBodyFat',
            body: {
                "modelInput":[[23,154.25,67.75,36.2,93.1,85.2,94.5,59.0,37.3,21.9,32.0,27.4,17.1]]
            },
            json: true,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        request(options).then(function (response){
            let dataFromFlaskAPI = JSON.stringify(response)
            dataFromFlaskAPI= JSON.parse(dataFromFlaskAPI)
            dataFromFlaskAPI = dataFromFlaskAPI.prediction
            let fatLevelPrediction = dataFromFlaskAPI[0];
            const newRecord  = new UserFatLevelRecords({
                userId,age, weight,height,neck,chest,abdomen,hip,knee,thigh,ankle,biceps,forearm,wrist,fatLevelPrediction
            })
            newRecord.save()
            .then(result=>{
                res.json({
                    Status: "Successful",
                    Message: 'Record  has been saved successfully.',
                    Prediction : fatLevelPrediction
                })
            })
            .catch(error=>{
                res.json({
                    Status: "Unsuccessful",
                    Message: "Happened while saving the body fat record in the DB.",
                    error: error
                })
            })
        })
        .catch(function (err) {
            res.json({
                Status: "Unsuccessful",
                Message: "Happened while sending the request to Flask API",
                error: err
            })
        })
    }
}