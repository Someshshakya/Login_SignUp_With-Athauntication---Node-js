const knex = require("../moddles/knex_set_up");

module.exports = (verifiCatioN,Knex,remove)=>{
    remove.delete('/delete/:email',verifiCatioN,(req,res)=>{
        knex('users').where({'email_id':req.params.email,'password':req.body.password}).delete().then(result=>{
            console.log("********Your details has been Deleted Successfully !! **********")
            res.send("********Your details has been Deleted Successfully !! **********")
        }) 
    })
}