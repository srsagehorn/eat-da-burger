const express = require("express");
const PORT = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set up main as the template handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");
app.use(routes);
app.listen(PORT, () => {
  console.log("Server listening on: port" + PORT);
});