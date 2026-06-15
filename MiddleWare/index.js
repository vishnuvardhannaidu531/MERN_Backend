const express = require("express");
const app = express();

// app.use("/user",(req,res)=>{
//     res.send("Hello from server");
//     console.log("first");
//     res.send("Second response")
// })

// app.use("/user",(req,res)=>{
//     res.send("Hello from server");
//     console.log("first");
//     // res.send("Second response")
// },
// (req,res)=>{
//     console.log("second");
//     res.send("Hello 2 from the second response")
// }
// )

// app.use("/user",(req,res,next)=>{
//     // res.send("Hello from server");
//     console.log("first");
//     // res.send("Second response")
//     next();
// },
// (req,res)=>{
//     console.log("second");
//     res.send("Hello from second call back function")
// }
// )

// app.use("/user",(req,res,next)=>{
//     // res.send("Hello from server");
//     console.log("first");
//     // res.send("Second response")
//     next();
// },
// (req,res,next)=>{
//     console.log("second");
//     // res.send("Hello from second call back function")
//     next();
// },
// (req,res)=>{
//     console.log("third");
//     res.send("Hello from the third")
// }
// )

// app.use("/user",(req,res,next)=>{
//     // res.send("Hello from server");
//     console.log("first");
//     // res.send("Second response")
//     next();
//     console.log("sixth")
// },
// (req,res,next)=>{
//     console.log("second");
//     // res.send("Hello from second call back function")
//     next();
//     console.log("fifth")
// },
// (req,res)=>{
//     console.log("third");
//     res.send("Hello from the third")
//     console.log("fourth")
// }
// )

// app.use("/user",(req,res,next)=>{
//     // res.send("Hello from server");
//     console.log("first");
//     // res.send("Second response")
//     next();
//     console.log("sixth")
// },
// (req,res,next)=>{
//     console.log("second");
//     // res.send("Hello from second call back function")
//     next();
//     console.log("fifth")
// },
// (req,res,next)=>{
//     console.log("third");
//     // res.send("Hello from the third")
//     next(); 
//     console.log("fourth")
// })

// app.use("/user",[(req,res,next)=>{
//     // res.send("Hello from server");
//     console.log("first");
//     // res.send("Second response")
//     next();
//     console.log("sixth")
// },
// (req,res,next)=>{
//     console.log("second");
//     // res.send("Hello from second call back function")
//     next();
//     console.log("fifth")
// },
// (req,res)=>{
//     console.log("third");
//     res.send("Hello from the third")
//     // next(); 
//     console.log("fourth")
// }])

// app.use("/user",(req,res,next)=>{
//     // res.send("Hello from server");
//     console.log("first");
//     // res.send("Second response")
//     next();
//     console.log("sixth")
// });

// app.use("/user",(req,res,next)=>{
//     // res.send("Hello from server");
//     console.log("Second");
//     // res.send("Second response")
//     next();
//     console.log("fifth")
// });

// app.use("/user",(req,res,next)=>{
//     res.send("Hello from server");
//     console.log("third");
//     console.log("fourth")
// });

// app.get("/user" , (req , res)=>{
//     console.log(`${Date.now()} ${req.method} ${req.url} `)
//     res.send("Info about the user")
// });

// app.post("/user", (req , res)=>{
//     console.log(`${Date.now()} ${req.method} ${req.url} `)
//     res.send("Info is saved");
// });

// app.delete("/user" , (req , res)=>{
//     console.log(`${Date.now()} ${req.method} ${req.url} `)
//     res.send("Info is deleted")
// })

app.use("/user" , (req, res , next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url} `);
    next();
})
app.get("/user" , (req , res)=>{
    
    res.send("Info about the user")
});

app.post("/user", (req , res)=>{

    res.send("Info is saved");
});

app.delete("/user" , (req , res)=>{
    res.send("Info is deleted")
})


app.listen(4000,()=>{
    console.log("Server is listening at the 4000 port number");
})
