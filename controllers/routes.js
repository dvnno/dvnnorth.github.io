const db = require("../models");

module.exports = (app) => {
    app.get("/", (_, res) => {
        db.projects.findAll()
            .then(projects => {
                res.statusCode = 200;
                res.render('home', { projects: projects });
            })
            .catch(error => {
                res.statusCode = 500;
                res.send(error);
            });
    });

    app.get("/api/project/:id", (req, res) => {
        db.projects.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(project => {
                res.statusCode = 200;
                res.send(project);
            })
            .catch(error => {
                res.statusCode = 500;
                res.send(error);
            });
    });
}