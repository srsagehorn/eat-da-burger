const express = require("express");
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");
const app = express();
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const routes = require("./controllers/burgers_controller");
app.use(routes);
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
