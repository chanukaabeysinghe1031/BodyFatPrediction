const router = require('express').Router()
const { predictBodyFatLevel}  = require('../controllers/bodyFatPrediction_controller')
router.post('/addUser',predictBodyFatLevel)
module.exports =  router