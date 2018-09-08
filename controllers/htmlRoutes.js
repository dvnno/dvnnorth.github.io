const db = require("../models");

module.exports = (app) => {
    app.get("/", (_, res) => {
        db.projects.findAll()
        .then(projects => {
            res.statusCode = 200;
            res.render('home', {projects: projects});
        })
        .catch(error => {
            if (error) {
                res.statusCode = 500;
                res.send(error);
            }
        }); 
    });
}