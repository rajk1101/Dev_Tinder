const express=require('express');
const app=express();

const {adminAuth,userAuth}=require("../middlewares/auth")

app.use('/admin',adminAuth);


app.use("/user",userAuth, (req, res) => {
  res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.status(200).send("All Data Send");
});
app.get("/admin/deleteUser", (req, res) => {
  res.send("All Data Delete");
});


app.listen(4000,()=>{
 console.log("Server is Listening in port no 4000") 
})













// const express = require("express");

// const app = express(); // this is the instance of the express application; it creates a new web server
// const adminAuth = require("./middlewares/auth");

// app.use("/admin", adminAuth);



// // app.use("/", (req, res, next) => {
// //   // res.send("Handling  /router")
// //   next();
// // });

// // //warapping the routes in an array does not affect anything
// // app.use("/user", [
// //   (req, res, next) => {
// //     console.log("Handling the Route User 1");
// //     // res.send("1st Response");
// //     next(); // if i will not send res from here then it will goes to next routehandler
// //   },
// //   [
// //     (req, res, next) => {
// //       console.log("Handling the Route User 2");
// //       // res.send("2nd Response");
// //       next();
// //     },
// //     (req, res, next) => {
// //       console.log("Handling the Route User 3");
// //       res.send("3nd Response");
// //       // next();
// //     },
// //   ],
// // ]);

// app.listen(3000, () => {
//   console.log("Server is successfully listening on port 3000");
// });
