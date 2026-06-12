const fs=require("fs")
let a =100;
let  b= 1023;
console.log(a);
function sum(a,b){
    console.log(a+b);
}
setTimeout(()=>{
    console.log("Set timemout timer")
},1000);
sum(a,b)
console.log(b);