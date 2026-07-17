const cookieParser = require("cookie-parser");

const jwt = require('jsonwebtoken');

const Valid = async  (req ,  res ,next) =>{
    try{
        const {token}  = req.cookies ;
        if(!token)
            throw new Error("Invalid token")

        const payload = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
        req.payload = payload ;
        next();

    }catch(err){
        res.send("Error message :" +err.message)
    }
}
module.exports = Valid ;

