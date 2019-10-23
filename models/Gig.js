// "use strict";
// const db = require("../config/database")

// module.exports = function (sequelize, DataTypes){
//   const Gig = db.define(
//     "Gig",
//     {
//       title: DataTypes.STRING,
//       technologies: DataTypes.STRING,
//       description: DataTypes.STRING,
//       budget: DataTypes.STRING,
//       contact_email: DataTypes.STRING
//     },
//     {}
//   );
//   Gig.associate = function(models) {
//     // associations can be defined here
//   };
//   return Gig;
// };

const Sequelize = require("sequelize")
const db = require("../config/database")

const Gig = db.define('gigs', {
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
})

module.exports = Gig
