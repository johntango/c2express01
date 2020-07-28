var express = require("express");
var app = express();
app.use(express.json());
// store contacts in an array
const contacts = [];
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

app.listen(3000);
console.log("Running on port 3000");
