const Auth = (req, res ,next)=>{
    const token = "ABCD";
    const Access = token  === "ABCD" ;
    if(Access){
        next();
    }else{
        res.status(403).send("You don't have  permission to this operation")
    }
}

module.exports={
    Auth ,
}
