// ==========================
// Dependencies 
// =========================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")

const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Require the express-handlebars npm package
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Require the routes in the burgers_controller file
const routes = require("./controllers/burgers_controller");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

// ====================
// listen on port 3000
// ====================
const port = process.env.PORT || 3000;
app.listen(port);
