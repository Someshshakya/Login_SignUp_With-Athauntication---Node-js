const express = require("express");
const bodyParser= require('body-parser');
const morgan = require('morgan');
const app = express();
require('dotenv').config()
app.use(bodyParser.json()); 

// This will give you each and every update about your request 
app.use(morgan('dev'));
const table_Create = require('./moddles/table_ceatation');
const PORT= process.env.PORT;
// This will hanldle all the  things.. coming from different files...
const router = require("./router")
app.use(router)

app.listen(PORT,()=>{
    console.log(`Sever is working on Port ${PORT}`)
});
