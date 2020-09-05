const express = require('express');
const router = express.Router();
// This will verify the user while updating his/her details and working on other things on your website..
const verifiCatioN = require('./Jwt_Authentication/verify'); 
const knex = require('./moddles/knex_set_up');

// This is Sign_up route
require('./controller/sign_up')(knex,router)

//This is Login route
require('./controller/login')(knex,router)

//This is to update user's details
require('./controller/update_detail')(knex,router,verifiCatioN)

//This will delete your account 
require('./controller/del')(verifiCatioN,knex,router)

module.exports = router;
