const express = require('express')
//importing the express library
const router = express.Router()

const randomWyrQuestion = require('../model/wyr_questions')

// we need a placeholder for the home page

router.get('/', function(req, res, next){
    res.send('Placeholder for home page')
})


router.get('/wyr', function(req, res, next){


    const wyr = randomWyrQuestion()


    // now we need to send the data
    res.json(wyr)
})

module.exports = router