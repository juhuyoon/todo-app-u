const express = require("express");
const routes = require("./controllers/index.js");

const app = express();
const PORT = process.env.PORT || 3001;

// This makes the express application USE the route content.
app.use(express.static("public"));
app.use(routes);

app.listen(PORT, () => {
  console.log("am I running?");
});
