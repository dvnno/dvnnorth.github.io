const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Setup handlebars as rendering engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require(path.join(__dirname, "/controllers/htmlRoutes"))(app);
require(path.join(__dirname, "/controllers/apiRoutes"))(app);

if (process.env.JAWSDB_URL) {
    syncDb(false);
}
else {
    syncDb(true);
}

function syncDb(force) {
    db.sequelize.sync({ force: force }).then(function () {
        app.listen(PORT, () => {
            if (force) console.log('Development Environment: ');
            else console.log('Deployed: ');
            console.log("Application running successfully on port", PORT);
        });
    });
}


