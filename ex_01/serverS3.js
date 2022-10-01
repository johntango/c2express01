// this uses "fetch" to get data from a url
var express = require("express");
var app = express();
const fetch = require("node-fetch");
app.use(express.json());
// store contacts in an arrays
var contacts = [];
const getData = async () => {
  let url = "https://pollysnips.s3.amazonaws.com/users.json";
  try {
    let res = await fetch(url);
    contacts = await res.json();
    console.log(contacts);
  } catch (error) {
    console.log("error");
  }
};
getData();
app.get("/", function (req, res) {
  res.send("<h1>  Routes: try POST to /contact and GET /contacts </h1>");
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

app.listen(3000);
console.log("Running on port 3000");
