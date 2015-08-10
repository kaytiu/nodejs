var express = require('express');
var router = express.Router();
var Custmoer = require('../model/Customer');

/* GET home page. */
router.post('/', function(req, res, next) {
 var data = {title:'Customer'};
 var account = req.body.account;
 var password = req.body.password;
 
 
 

  res.render('customer', data);
});

module.exports = router;
