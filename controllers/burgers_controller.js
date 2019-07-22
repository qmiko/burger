// Dependencies
var express = require('express');
var router = express.Router();

// Import Model
var burger = require('../models/burger.js');

// Defining Routes
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Add Burger
router.post('/burgers', function (req, res) {
  burger.insertOne([
    'burger_name'
  ], [
      req.body.burger_name
    ], function (data) {
      res.redirect('/');
    });
});

// Set 'Burger Devoured' to True
router.put('/burgers/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function (data) {
    console.log(data);
    res.redirect('/');
  });
});

//delete request
router.delete("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
module.exports = router;