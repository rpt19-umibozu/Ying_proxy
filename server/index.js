const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

app.use(express.static(('public')));
//console.log(express.static(__dirname + 'public'))
var port = 3000;

app.listen(port, () => {
  console.log(`server listening at ${port}`)
})