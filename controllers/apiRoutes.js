const path = require("path");
const db = require("../models");

module.exports = (app) => {
    app.get('/api/projects', (req, res) => {
        db.projects.findAll({})
            .then((results) => {
                res.statusCode= 200;
                res.json(results);
            })
            .catch((error) => {
                if (error) {
                    res.statusCode = 500;
                    res.send(error);
                }
            });
    });
}