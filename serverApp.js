//app.js
const express = require("express");
const app = express();
var contacts = [
  {
    name: "peter parker",
    age: 21,
    email: "peter@mit.edu",
  },
  {
    name: "bruce wayne",
    age: 32,
    email: "bruce@mit.edu",
  },
  {
    name: "diana prince",
    age: 25,
    email: "diana@mit.edu",
  },
];
app.get("/", function (req, res) {
  res.send("<h1> Routes: try POST to /contact or GET /contacts </h1>");
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
