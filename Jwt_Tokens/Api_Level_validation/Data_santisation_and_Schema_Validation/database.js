const mongoose = require("mongoose");
const {Schema} = mongoose ;
async function main(){
    await mongoose.connect("mongodb+srv://coderArmy531:Vishnu%40531@coddingadda.xv89mva.mongodb.net/Instagram");
}
module.exports = main
