const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const app = express();
const fullPath = '/Users/yingwenchen/Desktop/HR project/HR_RPT/FEC/Ying_proxy/public/index.html';

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

app.use(express.static(('public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/:id', (req, res) => {
  res.sendFile(fullPath);
});

var port = 3000;

app.listen(port, () => {
  console.log(`server listening at ${port}`)
})