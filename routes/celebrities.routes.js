// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");

// Route to show the form for creating a new celebrity
router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
  
    Celebrity.create({ name, occupation, catchPhrase })
      .then((newCelebrity) => {
        console.log(`${newCelebrity.name} added to database`);
        res.redirect("/celebrities");
      })
      .catch((error) => {
        console.log(error);
        res.render("celebrities/new-celebrity");
      });
  });

module.exports = router;