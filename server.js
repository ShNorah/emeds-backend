const express = require("express");
const category = require("./routers/categoryRoute");

//database connection
require("./config/config");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(category);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`using environment ${process.env.NODE_ENV}`);
  console.log(`listening on port ${port}`);
});

module.exports = app;
