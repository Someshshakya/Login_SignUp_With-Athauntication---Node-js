const jwt = require('jsonwebtoken');

module.exports = (knex,Login)=>{
    Login.post("/login",(req,res)=>{
        knex.select("username","password") .from("users") .where("username",req.body.username)
        .then(data=>{console.log(data)
            if(data.length==0){
                res.send("This user Id does not exists !!!")
            }else if(data[0].password==req.body.password){
                const token =jwt.sign(req.body.email_id,"my secret key")
                res.json({msg:" ********* Logged in Successfully !! ********",token:token})
            }else{
                res.send("Your Id or Password is Wrong!!  ")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
};