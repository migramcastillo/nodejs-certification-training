/*
  Run this with `node --inspect` and with a Browser use the Debug Tools for NodeJS
  This is example is taken from the book Node Cookbook: Actionable Solutions
 */
const express = require("express");
const app = express();

const past = require("./past");
const future = require("./future");

app.get("/:age", (req, res) => {
  res.send(past(req.params.age, 10) + future(req.params.future, 10));
});

app.listen(3000);
