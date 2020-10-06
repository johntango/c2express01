// this uses lowDB to store state
var express = require("express");
var app = express();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ contacts: [] }).write();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("<h1> Routes: try POST to /contact and GET /contacts </h1>");
});
// list all contacts
app.get("/contacts", function (req, res) {
  let con = db.get("contacts");
  res.json(con);
});
// add a contact
app.post("/contact", (req, res) => {
  db.get("contacts")
    .push({ name: req.body.name, email: req.body.email })
    .write();
  let con = db.get("contacts");
  res.json(con);
});

app.listen(3000);
console.log("Running on port 3000");
