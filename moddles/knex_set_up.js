require('dotenv').config();
// console.log(process.env.PASSWORD)
module.exports = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.HOST,
      user : "root",
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    }
  });
