const express = require("express")
const mongoose = require("mongoose")
const middleware = require("./middleWares/auth")
var cors = require('cors')


const userRoute = require("./routes/user")
const postRoute = require("./routes/post")
const authRoute = require("./routes/auth")
const app = express();
mongoose.connect('mongodb://localhost:27017/mydb')
// const port = process.env.PORT || 3000


//express middleware
app.use(express.json()) 

  
app.use(cors());

  
 
  
  app.use("/api/auth", authRoute)
  app.use("/api/users", userRoute)
  app.use(middleware)
  app.use("/api/posts", postRoute)

  
  app.use("*", (req, res, next) => {
      res.status(404).end();
  })
  app.use((err, req, res, next) => {
    res.json("Error, Not Found");
    res.status(500).end();
  });

  app.listen(3000, () => {
    console.log("App Is Running");
})