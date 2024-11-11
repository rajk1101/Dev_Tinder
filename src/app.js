const express=require("express");


const app=express(); // this is the instance of the express js Applicaton  it is like creating a new web server

// this will match the all http method API calls to /test/users 
app.use("/test",(req,res)=>{        // handling the server
    res.send("Hello test from the Server")
})
 //this will only handle GET call   to /user/
app.get("/user",(req,res)=>{ 
    console.log(req.query   )
    res.send({firstName:"Sudhir",lastName:"kumar"})
})

app.post("/user",(req,res)=>{
    res.send("Data successfully saved to the database")
})
app.use("/delete",(req,res)=>{        // handling the server
    res.send("Data Deleted Succesfully")
})


// app.get("/user/:userID/:name/:password",(req,res)=>{ 
//     console.log(req.params )
//     res.send({firstName:"Sudhir",lastName:"kumar"})
// })

// app.use("/hello",(req,res)=>{        // handling the server
//     res.send("Hello from the Server")
// })


app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000")
});    // server is listening to us 