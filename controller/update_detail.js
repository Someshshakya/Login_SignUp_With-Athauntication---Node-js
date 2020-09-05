module.exports = (knex,update,verifiCatioN)=>{
    update.put('/update/:id',verifiCatioN,(req,res)=>{
        knex.select("email_id","name","password","phone") .from("users") .where("email_id",req.params.id)
        .then(data =>{
            console.log(data)
            if (data.length!=0){
                if (data[0].password==req.body.password_to_confirm){
                    knex("users")
                       .update({
                        name:req.body.name,
                        phone:req.body.phone,
                        password:req.body.password
                    })
                    .where("email_id",req.params.id)
                    .then(data=>{
                        console.log("********Your details has been updated Successfully !! **********")
                        res.send("*********Your details has been updated Successfully !! *************")
                    })
                    .catch(err=> {
                        console.log(err)
                        res.send("Plz Go and check you code!")
                    })
                }else{
                    console.log("Your password is not valid!!1")
                    res.send("Your password is not valid!!1")
                }
            }else{
                console.log("this userid doesnot exists   !! ")
                res.send("this userid doesnot exists   !! ")
            }
        })
        .catch(err =>{
            console.log(err)
            res.send("Check your code ther is some mistake  ")
        });
    });
};