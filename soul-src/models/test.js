// reference: https://velopert.com/594
<<<<<<< HEAD
var mongoose = require('mongoose');

var mongodb = 'mongodb://127.0.0.1/test';
mongoose.connect(mongodb);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));






//  !-- PP Example -- //
// const Schema = mongoose.Schema;

// const testSchema = new Schema({
//   date: { type: Date, default: Date.now },
//   author: String,
//   content: String,
// });

// module.exports = mongoose.model('test', testSchema);
=======
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
  date: { type: Date, default: Date.now },
  author: String,
  content: String,
});

module.exports = mongoose.model('test', testSchema);
>>>>>>> ed6c45f34e2f3311086cd58f97f670ac90e8f9f1
