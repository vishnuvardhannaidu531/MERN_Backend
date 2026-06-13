const express = require("express")
const app = express();

//Withh this all he things  are working fine  
// app.use('/about',(req,res)=>{
//     res.send("I am your about page");
// })

// app.use('/detail',(req,res)=>{
//     res.send("I am your detail page");
// })

// app.use('/contact',(req,res)=>{
//     res.send("I am your Contact page");
// })

// app.use((req,res)=>{
//     // console.log(req)
//     // console.log(res)
//     // res.send("I  am  vishnuvardhan  naidu")
//     res.send({"name":"vishnu","age":"20" })
// })

//As e ver this / has introdued  then in all pages it will show the same home page even though you had written the code in an correct manner


// app.use('/detail',(req,res)=>{
//     res.send("I am your detail page");
// })

// app.use('/about',(req,res)=>{
//     res.send("I am your about page");
// })

// app.use('/contact',(req,res)=>{
//     res.send("I am your contact page");
// })


// app.use('/',(req,res)=>{
//     res.send("I am your Home page");
// })


app.use('/about/:id/:username', (req, res) => {
    console.log(req.params.id)
    console.log(req.params.username)
    res.send("About");
});

app.use("/", (req, res) => {
    res.send("Home");
});

app.listen(4000,()=>{
    console.log("I am listening at the port  number 4000");
}
)