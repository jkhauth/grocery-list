var express = require('express')
var router = express.Router();
var burger = require('../models/burger')

//WHERE WE PUT THE ROUTER FUNCTIONALITY (GET, POST, DELETE)

router.get('/', function (req, res) {
    res.redirect('/burgers')
  })

router.get('/burgers', function(req,res){
    burger.all(function (data){
        var burgerObject = { burgers: data };
        console.log(burgerObject)
        res.render('index',burgerObject)
    })
})

module.exports = router