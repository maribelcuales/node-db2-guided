const knex = require('knex');

const knexfile = require("../knexfile.js"); 

const environment = process.env.NODE_ENV || "development"; // undefined | production  


// const fruitsenv = process.env.FRUITS_ENV || "fruits"; 

// const veggiessenv = process.env.VEGGIES_ENV || "veggies"; 



module.exports = knex(knexfile[environment]);

// module.exports = {
//   fruits: knex(knexfile[fruitsenv]),
//   veggies: knex(knexfile[environment])
// };


