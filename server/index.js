const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

app.use(express.static(('public')));


// var serverOne = 'http://localhost:3001',
//     ServerTwo = 'http://localhost:3002',
//     ServerThree = 'http://localhost:3004';

// app.all('/', function(req, res) {
//     console.log('redirecting to Server1');
//     apiProxy.web(req, res, {target: serverOne});
// });

// app.all('/', function(req, res) {
//     console.log('redirecting to Server2');
//     apiProxy.web(req, res, {target: ServerTwo});
// });

// app.all('/', function(req, res) {
//     console.log('redirecting to Server3');
//     apiProxy.web(req, res, {target: ServerThree});
// });
//console.log(express.static(__dirname + 'public'))
var port = 3000;

app.listen(port, () => {
  console.log(`server listening at ${port}`)
})