"use strict";

const config = require(appRoot + '/config');
const mongoose = require('mongoose');
const MONGODB_URI = "mongodb://localhost:27017/test";

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;