module.exports = (knex,sign_up)=>{
    sign_up.post('/sign',(req,res)=>{
        knex.select('username').from('users').where("username",req.body.username)
        .then(data => {if (data.length==0){
                    knex('users').insert(
                    {name: req.body.name,
                    email_id:req.body.email_id,
                    password: req.body.password,
                    username:req.body.username,
                    phone:req.body.phone})
                    .then(data=>{
                        console.log('******** Your has * data * been inserted Successfully *******')
                        res.send('******** Your has data been inserted Successfully *******')
                    })
                    .catch(err=>{
                        console.log(err)
                        res.json({mes:"Plz Go and Check your Code..."})
                    })
            }else{
                console.log("This user id Already exists!! ")
                res.json({msg:"This user id already exists"})
            }   
        })
        .catch(err=>{
            console.log(err)
        }); 
    })
}