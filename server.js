const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./models");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

require(path.join(__dirname, "/controllers/routes"))(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, () => {
        console.log("Application running successfully on port", PORT);
    });
});
