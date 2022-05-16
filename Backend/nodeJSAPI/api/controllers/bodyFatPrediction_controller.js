const UserFatLevelRecords = require('../models/userFatLevelRecord')

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
        let fatLevelPrediction = 44.44;
        const newRecord  = new UserFatLevelRecords({
            userId,age, weight,height,neck,chest,abdomen,hip,knee,thigh,ankle,biceps,forearm,wrist,fatLevelPrediction
        })
        newRecord.save()
        .then(result=>{
            res.json({
                Status: "Successful",
                Message: 'Record  has been saved successfully.',
                prediction : fatLevelPrediction
            })
        })
        .catch(error=>{
            console.log(error)
            res.json({
                Status: "Unsuccessful",
                Message: "Happened saving the record in " +
                    "DB.",
                error: error
            })
        })
    }
}