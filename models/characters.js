// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../app/config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Character = sequelize.define("characters", {
  routeName: {type: Sequelize.STRING, allowNull: false },
  name: {type: Sequelize.STRING, allowNull: false },
  role: {type: Sequelize.STRING, allowNull: false },
  age: {type: Sequelize.INTEGER, allowNull: false },
  forcePoints: {type: Sequelize.INTEGER, allowNull: false }
});



// Syncs with DB - alter overwrites only where there's difference
Character.sync({ alter: true });

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Character;
