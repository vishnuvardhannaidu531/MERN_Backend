//It will import the sum operation from one file 
//And also it will import sub operation from other file 
//Similary multiplication operation from other file
//Sum
//Sub
//Mul
// const sum=require("./Calculation/sum");
// const sub=require("./Calculation/sub");
// const mul=require("./Calculation/mul");
const {sum,sub,mul}=require("./Calculation")
sum(3,4);
sub(19,11);
mul(10,20)

console.log("hello")