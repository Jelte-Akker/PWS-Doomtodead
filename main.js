var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index.html')
})

app.get('/tweede_pagina', function (req, res) {
  res.render('second.html')
})

app.all('*', function (req, res) {
  res.render('error.html')
})

app.listen(1000, function () {
    console.log('Started PWS website')
})
