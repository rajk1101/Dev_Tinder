const express = require("express");

const app = express(); // this is the instance of the express application; it creates a new web server
//warapping the routes in an array does not affect anything 
app.use(
  "/user",
  [(req, res,next) => {
    console.log("Handling the Route User 1");
    // res.send("1st Response");
    next();  // if i will not send res from here then it will goes to next routehandler
  },
 [ (req, res,next) => {
    console.log("Handling the Route User 2");
    // res.send("2nd Response");
    next();
  },
  (req, res,next) => {
    console.log("Handling the Route User 3");
    res.send("3nd Response");   
    // next();
  }]]
);

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
