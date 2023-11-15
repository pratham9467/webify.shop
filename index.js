const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("views", { "Content-Type": "text/css" }));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define a route to render an HTML page
app.get("/", (req, res) => {
  // Render the HTML page using EJS
  res.render("index", { title: "Express with EJS" });
});
app.get("/contact", (req, res) => {
  // Render the HTML page using EJS
  res.render("contact", { title: "Express with EJS" });
});
app.get("/about", (req, res) => {
  // Render the HTML page using EJS
  res.render("about", { title: "Express with EJS" });
});
app.get("/blog", (req, res) => {
  // Render the HTML page using EJS
  res.render("blog", { title: "Express with EJS" });
});
app.get("/digimrkt", (req, res) => {
  // Render the HTML page using EJS
  res.render("digimrkt", { title: "Express with EJS" });
});
app.get("/permkt", (req, res) => {
  // Render the HTML page using EJS
  res.render("permkt", { title: "Express with EJS" });
});
app.get("/seo", (req, res) => {
  // Render the HTML page using EJS
  res.render("seo", { title: "Express with EJS" });
});
app.get("/webdev", (req, res) => {
  // Render the HTML page using EJS
  res.render("webdev", { title: "Express with EJS" });
});
app.get("/webinar", (req, res) => {
  // Render the HTML page using EJS
  res.render("webinar", { title: "Express with EJS" });
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contact",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

app.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const service = req.body.service;
  const company = req.body.company;
  const website = req.body.website;
  const message = req.body.message;
  // console.log('Received POST request with data:', data);
  // res.json({ message: 'POST request received successfully', data: req.body });
  const sql = `INSERT INTO contact_page(full_name, email, phone, service, company, website, message) VALUES('${name}', '${email}', '${phone}', '${service}', '${company}', '${website}', '${message}')`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return;
    }
  });
  res.redirect("/contact");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
