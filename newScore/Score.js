var mongoose = require('mongoose');
var ScoreSchema = new mongoose.Schema({
    project: String,
    period: Number,
    day: String,
    team: String,
    trial: Number,
    score: Number
    timestamp: Number
});