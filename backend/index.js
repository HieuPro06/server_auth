const express = require("express");
const loginRoute = require("./router/login");
const regiterRoute = require("./router/register");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const server = express();
const port = 7777;
dotenv.config();
const connectToMongo = async () => {
  try{
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected with database");
  } catch(error){
    console.log(error);
  }
}
connectToMongo();
server.use(bodyParser.json());
server.use(cors());
server.get("/",(req,res) => {
  res.json("Welcome to Authentication API ^^");
})
server.use("/login",loginRoute);
server.use("/register",regiterRoute);

server.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}`);
})