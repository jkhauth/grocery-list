const { json } = require('express');
var express = require('express')
var router = express.Router();
var burger = require('../models/burger')

//WHERE WE PUT THE ROUTER FUNCTIONALITY (GET, POST, DELETE)

router.get('/', function (req, res) {
    res.redirect('/burgers')
    
  })

//burgers homepage
router.get('/burgers', function(req,res){
    burger.all(function (data){
        res.render('index', { burgers: data })
    })
    burger.all(function(data){
      console.log(data)
      })
})

// insert new burger
// router.post("/api/burgers", function(req, res) {
//     console.log(req.body)
//     res.end()
//   });

router.post("/api/burgers", function(req, res){
    burger.insertOne(req.body.burger_name, function(){});
    res.end()
});
    
//all burgers
router.get('/api/burgers/', function(req,res){
    burger.all(function (data){
        // console.log(data)
        res.json(data);
})})



module.exports = router