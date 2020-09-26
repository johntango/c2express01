//app.js
const express = require("express");
const app = express();
var contacts = [];
app.get("/", function (req, res) {
  res.send("<h1> Routes: try POST to /contact and GET /contacts </h1>");
});
// list all contacts
app.get("/contacts", function (req, res) {
  res.json(contacts);
});
// add a contact
app.post("/contact", (req, res) => {
  contacts.push({ name: req.body.name, email: req.body.email });
  res.json(req.body);
});

module.exports = app;
