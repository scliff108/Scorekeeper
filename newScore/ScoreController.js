var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParse.json());
var Score = require('./Score');

// CREATES A NEW SCORE
router.post('/', function (req, res) {
    Score.create({
        project: req.body.project,
        period: req.body.period,
        day: req.body.day,
        team: req.body.team,
        trial: req.body.trial,
        score: req.body.score,
        timestamp: Date.now(),
    },
    function (err, score) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(score);
    });
});

// RETURNS ALL THE SCORES IN THE DATABASE
router.get('/', function (req, res) {
    Score.find({}, function (err, scores) {
        if (err) return res.status(500).send("There was a problem finding the scores.");
        res.status(200).send(scores);
    });
});

// DELETES A SCORE FROM THE DATABASE
router.delete(':/id', function (req, res) {
    Score.findByIdAndRemove(req.params.id, function (err, score) {
        if (err) return res.status(500).send("There was a problem deleting the score.");
        res.status(200).send("Score for " + score.team + " deleted.");
    });
});