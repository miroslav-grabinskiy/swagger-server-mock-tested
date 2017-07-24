"use strict";

const mongoose = require(appRoot + '/lib/mongoose');
const Schema = require('mongoose').Schema;

const helloSchema = new Schema({
  name: String
});

module.exports.Hello = mongoose.model('Hello', helloSchema);