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
})

// insert new item
router.post("/api/burgers", function(req, res){
    burger.insertOne(req.body.burger_name, function(){});
    res.end()
});

// updates new item
router.put("/api/burgers", function(req, res){
    burger.updateOne(req.body.id)
    res.end()
})

// deletes item
router.delete("/api/burgers", function(req, res){
    burger.deleteOne(req.body.id)
    res.end()
})

//all burgers
router.get('/api/burgers/', function(req,res){
    burger.all(function (data){
        // console.log(data)
        res.json(data);
})})



module.exports = router