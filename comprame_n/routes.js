
var express = require('express');
module.exports = function(app) {
  app.get('/', function(req, res){
	var data = require('./controllers/indexController');
	var data = {title:'test by kwan'};
    res.render('index',data);
  });
}

