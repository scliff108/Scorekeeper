var mongoose = require('mongoose');
var username = 'username';
var password = 'password';
mongoose.connect(`mongodb+srv://${username}:${password}@scorekeeper-sgdwq.mongodb.net/test?retryWrites=true&w=majority`);