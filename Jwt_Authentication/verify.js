const jwt = require('jsonwebtoken');
module.exports = (req,res,next)=>{
    token = req.headers.authorization;
    decoded = jwt.verify(token,"my secret key")
    console.log(decoded)
    if (decoded == "deepak@gmail.com"){
        next()

    }else{
        res.send("You are not admin ....")
    }
}