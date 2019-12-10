var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParse.json());
var Project = require('./Project');


// CREATE A NEW PROJECT
router.post('/', function (req, res) {
    Project.create({
        projectName: req.body.projectName
    },
    function (err, project) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(project);
    });
});


// RETURNS ALL THE PROJECTS IN THE DATABASE
router.get('/', function (req, res) {
    Project.find({}, function(err, projects) {
        if (err) return res.status(500).send("There was a problem finding the projects.");
        res.status(200).send(projects);
    });
});

// GETS A SINGLE PROJECT FROM THE DATABASE
router.get('/:id', function (req, res) {
    Project.findById(req.params.id, function (err, project) {
        if (err) return res.status(500).send("There was a problem finding the project.");
        if (!project) return res.status(404).send("No project found.");
        res.status(200).send(project);
    });
});

// DELETES A PROJECT FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Project.findByIdAndRemove(req.params.id, function (err, project) {
        if (err) return res.status(500).send("There was a problem deleting the project.");
        res.status(200).send("Project: "+ project.projectName + " was deleted.");
    });
});

