// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Sequelize = require("sequelize");
var Characters = require("../../models/characters.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
      Characters.findAll({
        where: {routeName: req.params.characters}
      })
        .then(data => {
          // console.log('data-searched:', data[0]);   
          res.json(data);
          
        })
        .catch(e => {throw e});


    } else {
      
      // Otherwise display the data for all of the characters.
      Characters.findAll({})
        .then(data => {
          // console.log('all-data: ', data);
          res.json(data);
          })
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // add routes
    req.body.routeName = req.body.name.trim();
    // Take the request...
    var character = req.body;

    // Then send it to the ORM to "save" into the DB.

    Characters.create(character) 
      .then(data => {

        console.log(data);
        res.json({});
    
    })

  })
};
