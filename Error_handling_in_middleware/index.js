// const express = require("express");
// const app = express();

// const FoodMenu=[
//     {id:1,fooditem:"Chicken",category:"Non-Veg" ,price:300},
//     {id:2,fooditem:"Butter Chicken",category:"Non-Veg" ,price:600},
//     {id:3,fooditem:"Chicken Chilli",category:"Non-Veg" ,price:200},
//     {id:4,fooditem:"Dosa",category:"Veg" ,price:100},
//     {id:5,fooditem:"Idly",category:"Veg" ,price:200}
// ];
// //USer to add items into the cart
// const AddtoCart = [];
// //Any user can see these all items
// app.get("/food" , (req, res)=>{
//     res.status(200).send(FoodMenu);
// })
// app.use(express.json())
// app.post("/admin" , (req, res) => {
//     //At first i need to authunticate whether the user is admin or not
//     //Right now here we will create an dummy authentication as 
//     const token  = "ABCDEF";
//     const Acess = token === "ABCDEF" ;
//     if(Acess){
//         FoodMenu.push(req.body);
//         // res.send(`Added item Sucessfully `)
//         res.status(201).send(FoodMenu)
//     }else{
//         res.status(201).send("Acess is denied to add item")
//     }
// })

// app.delete("/admin/:id" , (req, res) => {
//     //At first i need to authunticate whether the user is admin or not
//     //Right now here we will create an dummy authentication as 
//     const token  = "ABCDEF";
//     const Acess = token === "ABCDEF" ;
//     if(Acess){
//         const id = parseInt(req.params.id) ;
//         const index = FoodMenu.findIndex( info => info.id === id);
//         if(index == -1 ){
//             res.send("Item does not exist")
//         }else{
//             FoodMenu.splice(index , 1 );
//             res.send(FoodMenu)
//         }
       
//         // res.send(`Added item Sucessfully `)
        
//     }else{
//         res.status(403).send("You didn't have the permission to delete the item")
//     }
// })

// app.patch("/admin", ( req, res)=>{
//     //If the user is admin then we need to give him the access
//     //So for that i need to authentication
//     const token = "ABCDEF";
//     const access = token === "ABCDF" ;
//     if(access){
//         const id = req.body.id;
//         //If item found then it return the item otherwise -1 
//         const item = FoodMenu.find(info => info.id === id) ;
        
//         if(item){
//             //See whatever field sended by then client in thate field only we  need to upadate 
//             //So we will se wheher which field is present 
//             if(req.body.fooditem)
//                 item.fooditem=req.body.fooditem;
//             if(req.body.category)
//                 item.category = req.body.category ;
//             if(req.body.price)
//                 item.price = req.body.price ;
//             res.status(200).send("Item Updated succesfully")
//         }else{
//             res.status(200).send("item doesn't exists to update the item")
//         }

//     }else{
//         res.status(403).send("You didn't have the  permsission to do update") ;
//     }
// })

// app.listen(4000 , (req, res)=>{
//     console.log("Server is lsitening at the port number 4000");
// })


// const express = require("express");
// const app = express();

// const FoodMenu=[
//     {id:1,fooditem:"Chicken",category:"Non-Veg" ,price:300},
//     {id:2,fooditem:"Butter Chicken",category:"Non-Veg" ,price:600},
//     {id:3,fooditem:"Chicken Chilli",category:"Non-Veg" ,price:200},
//     {id:4,fooditem:"Dosa",category:"Veg" ,price:100},
//     {id:5,fooditem:"Idly",category:"Veg" ,price:200}
// ];
// //USer to add items into the cart
// const AddtoCart = [];
// //Any user can see these all items
// app.get("/food" , (req, res)=>{
//     res.status(200).send(FoodMenu);
// })
// app.use("/admin" , (req , res ,next) => {
    
// })
// app.use(express.json())
// app.post("/admin" , (req, res) => {
    
//         res.status(201).send(FoodMenu)
    
// })

// app.delete("/admin/:id" , (req, res) => {
    
//         const id = parseInt(req.params.id) ;
//         const index = FoodMenu.findIndex( info => info.id === id);
//         if(index == -1 ){
//             res.send("Item does not exist")
//         }else{
//             FoodMenu.splice(index , 1 );
//             res.send(FoodMenu)
//         }
       
       
// })

// app.patch("/admin", ( req, res)=>{
//         const id = req.body.id;
//         //If item found then it return the item otherwise -1 
//         const item = FoodMenu.find(info => info.id === id) ;
        
//         if(item){
//             //See whatever field sended by then client in thate field only we  need to upadate 
//             //So we will se wheher which field is present 
//             if(req.body.fooditem)
//                 item.fooditem=req.body.fooditem;
//             if(req.body.category)
//                 item.category = req.body.category ;
//             if(req.body.price)
//                 item.price = req.body.price ;
//             res.status(200).send("Item Updated succesfully")
//         }else{
//             res.status(200).send("item doesn't exists to update the item")
//         }
// })

// app.listen(4000 , (req, res)=>{
//     console.log("Server is lsitening at the port number 4000");
// })


const express = require("express");
const { Auth } = require("./Authentication");
const app = express();

const FoodMenu=[
    {id:1,fooditem:"Chicken",category:"Non-Veg" ,price:300},
    {id:2,fooditem:"Butter Chicken",category:"Non-Veg" ,price:600},
    {id:3,fooditem:"Chicken Chilli",category:"Non-Veg" ,price:200},
    {id:4,fooditem:"Dosa",category:"Veg" ,price:100},
    {id:5,fooditem:"Idly",category:"Veg" ,price:200}
];
//USer to add items into the cart
const AddtoCart = [];
//Any user can see these all items
app.get("/food" , (req, res)=>{
    res.status(200).send(FoodMenu);
})
app.use("/admin" , Auth) ;
app.use(express.json())
app.post("/admin" , (req, res) => {
        FoodMenu.push(req.body)
        res.status(201).send(FoodMenu)
    
})

app.delete("/admin/:id" , (req, res) => {
    
        const id = parseInt(req.params.id) ;
        const index = FoodMenu.findIndex( info => info.id === id);
        if(index == -1 ){
            res.send("Item does not exist")
        }else{
            FoodMenu.splice(index , 1 );
            res.send(FoodMenu)
        }
       
       
})

app.patch("/admin", ( req, res)=>{
        const id = req.body.id;
        //If item found then it return the item otherwise -1 
        const item = FoodMenu.find(info => info.id === id) ;
        
        if(item){
            //See whatever field sended by then client in thate field only we  need to upadate 
            //So we will se wheher which field is present 
            if(req.body.fooditem)
                item.fooditem=req.body.fooditem;
            if(req.body.category)
                item.category = req.body.category ;
            if(req.body.price)
                item.price = req.body.price ;
            res.status(200).send("Item Updated succesfully")
        }else{
            res.status(200).send("item doesn't exists to update the item")
        }
})

app.listen(4000 , (req, res)=>{
    console.log("Server is lsitening at the port number 4000");
})
