const mongoose = require('mongoose');

const Users = require('./user');

const config = require('../core/config')

mongoose.connect(
  'mongodb+srv://fahmis4d:LC8fOM3bpW3w01mD@cluster0.ymutlad.mongodb.net/?retryWrites=true&w=majority&ssl=true',
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB server!');
});

module.exports = {
  db,
  Users,
  config,
};