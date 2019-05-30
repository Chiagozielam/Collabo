const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");
const Sequelize = require("sequelize");
const Op = Sequelize.Op

// Get gig list
router.get("/", (req, res) => {
  Gig.findAll()
    .then(gigs => {
      res.render("gigs", {
        gigs
      });
    })
    .catch(err => console.log(`the gig error is ${err}`));
});

// Display Add Gig Form

router.get("/add", (req, res) => {
  res.render("add");
});

// ADD A GIG
router.post("/add", (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;

  // FORM VALIDATIONS
  let errors = [];

  if (!title) {
    errors.push({ text: "Please Enter a Title" });
  }
  if (!technologies) {
    errors.push({ text: "Please add the technologies required" });
  }
  if (!description) {
    errors.push({ text: "Please add the Gig description" });
  }
  if (!contact_email) {
    errors.push({ text: "Please Enter a contact email" });
  }

  // CHECK FOR ERRORS
  if ( errors.length > 0) {
    res.render("add", () => {
      errors, title, technologies, budget, description, contact_email;
    });
    console.log(errors)
  } else {
    if(!budget) {
      budget = "Negotiable"
    }
    if(budget == 0) {
      budget = "Partnership"
    }else{
      budget = `$ ${budget}`
    }

    // MAKE LOWERCASE AND REMOVE SPACE AFTER EACH COMMA
    technologies = technologies.toLowerCase().replace(/, /g, ',');
    // Insert Into Table
    Gig.create({
      title,
      technologies,
      budget,
      description,
      contact_email
    })
      .then(gig => res.redirect("/gigs"))
      .catch(err => console.log(`the Gig create error is ${err}`));
  }
});


//  SEARCHING FUNCTIONALITY
router.get("/search", (req, res) => {
  let {term} = req.query;
  term = term.toLowerCase();

  Gig.findAll({ where: {technologies: {[Op.like]: "%" + term + "%"}}})
  .then(gigs => {
    res.render("gigs", {
      gigs
    })
  })
  .catch( err => console.log(`Here is the search error ${err}`))
});

module.exports = router;
