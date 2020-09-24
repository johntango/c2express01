var express = require("express");
var app = express();
app.use(express.json());
// store contacts in an array
var contacts = [
  {
    name: "peter parker",
    age: 21,
    email: "peter@mit.edu",
    courses: [[Object], [Object]],
  },
  {
    name: "bruce wayne",
    age: 32,
    email: "bruce@mit.edu",
    courses: [[Object], [Object]],
  },
  {
    name: "diana prince",
    age: 25,
    email: "diana@mit.edu",
    courses: [[Object], [Object]],
  },
];

app.get("/", function (req, res) {
  res.send("<h1> Routes: try POST to /contact and GET /contacts </h1>");
});
// list all contacts
app.get("/contacts", function (req, res) {
  res.json(contacts);
});


app.listen(3000);
console.log("Running on port 3000");
