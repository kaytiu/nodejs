var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./routes')(app);
app.listen(3000);

console.log('comprame listen on 3000');