// this uses /login to authorize a user
var express = require("express");
var app = express();
const fetch = require("node-fetch");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));

const authenticate = (req, res, next) => {
  const url = req.url;
  if (url) {
    let path = url.split("=");
    if (path[1] == "secret-toke") {
      req.user = "john";
      next(); // call next route
    }
  } else {
    res.sendStatus(401);
  }
};
// store contacts in an arrays
var contacts = [
  {
    name: "peter parker",
    age: 21,
    email: "peter@mit.edu",
    courses: [
      { number: "1.00", name: "engr comp" },
      { number: "3.00", name: "intro bio" },
    ],
  },
  {
    name: "bruce wayne",
    age: 32,
    email: "bruce@mit.edu",
    courses: [
      { number: "2.00", name: "intro ME" },
      { number: "3.00", name: "intro MS" },
    ],
  },
  {
    name: "diana prince",
    age: 25,
    email: "diana@mit.edu",
    courses: [
      { number: "2.00", name: "intro arch" },
      { number: "1.00", name: "intro chem" },
    ],
  },
];

app.get("/", function (req, res) {
  res.send("<h1> Goodbye Routes: try POST to /contact and GET /contacts </h1>");
});
app.get("/login", (req, res) => {
  // send back a login form
  let form = `<form action="/auth" method="post">
    <label for="name">Enter name: </label>
    <input id="name" type="text" name="name" value="name">
    <input id="password" type="text" name="password" value="password">
    <input type="submit" value="OK">
    </form>`;
  res.send(form);
});
app.post("/auth", (req, res) => {
  let { name, password } = req.body;

  // check if user is in DB if so send back security token
  let form = `<form action="/contacts" method="get">
  <label for="name">Get Contacts </label>
  <input id="token" type="text" name="token" value="secret-token">
  <input type="submit" value="OK">
  </form>`;

  res.send(form);
});
// list all contacts
app.get("/contacts", authenticate, function (req, res) {
  res.json(contacts);
});

app.listen(3000);
console.log("Running on port 3000");
