require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose"); // MongoDB
const Contact = require("./models/contacts.model"); // importing the model Contact from the file contacts.model.js
const contact = require("./models/contacts.model");
// const contact = require("./models/contacts.model");

//Database connection

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database Connected: "));

//middlewares
app.set("view engine", "ejs"); // to use the ejs engine
app.use(express.urlencoded({ extended: false })); // to convert the data entered by user intp JS objects so that it can be used in the JS file
app.use(express.static("public")); // To incorporate the static files like CSS, images, sounds etc

// app.listen(3001, function () {
//   console.log("SERVER STARTED on PORT 3001: ");
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});

//ROUTES

app.get("/", async (req, res) => {
    console.log("Home page route hit")
  const contacts = await Contact.find();
  console.log(contacts);
  res.render("home", { contacts: contacts });

  // res.render("home.ejs")
});

app.get("/show-contact/:id", async(req, res) => { // receiving the id from database
  const contact = await Contact.findOne({ _id: req.params.id}) // the id is saved into req.params.id and we are finding getting the entire object (contact) by using findOne() and saving it to the variable contact
  res.render("show-contact", {contact: contact}); // contact <-- now is the variable having the object which is passed to the show contact page, which is then displayed using EJS
  // res.json(contact)
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

app.post("/add-contact", async (req, res) => {
 await Contact.create(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      Address: req.body.Address
    }
  )

  res.redirect("/")
});

app.get("/update-contact/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id); //fetched data from database, now contact holds the object
  res.render("update-contact", {contact: contact}) // variable contact is send to the html file named update contact
});

app.post("/update-contact/:id", async(req, res) => { // the user that sends the data to the server is stored in req.body
  await Contact.findByIdAndUpdate(
    req.params.id, // finding the data with its id in the database
    {
      first_name: req.body.first_name,  //updating the data 
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      Address: req.body.Address
    }
  )
  res.redirect("/")
  
});

app.get("/delete-contact/:id", async(req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
});
