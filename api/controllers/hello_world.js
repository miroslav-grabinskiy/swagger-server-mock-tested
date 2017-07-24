'use strict';

const HelloModel = require('../models/hello_world').Hello;

module.exports = {
  list,
  add
};

function list(req, res) {
  HelloModel.find({})
    .then(list => res.json(list))
    .catch(err => res.json(err))
}

function add(req, res) {
  new HelloModel(req.body)
    .save()
    .then(doc => res.json(doc))
    .catch(err => res.json(err))
}
