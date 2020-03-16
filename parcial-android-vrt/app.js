'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var ressembleCompare = require('./controllers/Ressemble.ctrl.js');

const port = 8002;

app.options('*', cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/test', [ressembleCompare]);

app.use( function (req, res, next) {
    next();
});

app.listen(port, () => {
  console.log('Ressemble listening on ' + port);
});
