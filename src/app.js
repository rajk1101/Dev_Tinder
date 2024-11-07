const express=require("express");


const app=express(); // this is the instance of the express js Applicaton  it is like creating a new web server

app.use("/",(req,res)=>{        // handling the server
    res.send("Hello Friends Chai pee lo")
})

app.use("/test",(req,res)=>{        // handling the server
    res.send("Hello test from the Server")
})

app.use("/hello",(req,res)=>{        // handling the server
    res.send("Hello from the Server")
})


app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000")
});    // server is listening to us 