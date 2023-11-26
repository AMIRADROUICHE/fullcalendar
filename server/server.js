/*require ("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const app = express ();
app.use (bodyParse.json());
mongoose.connect(process.env.MONGODB_URI,{useUnifiedTopology:true,useNewurlPaser:true},
     callback:() => console.log("connected to MongoDB"));
     app.listen(part:5000 ,callback:()=>console.log("Server started"));*/
     require("dotenv").config();

     const express = require("express");
     const mongoose = require("mongoose");
     const bodyParser = require("body-parser");
     
     const app = express();
     app.use(bodyParser.json()); // Correction : Utilisation de bodyParser.json() au lieu de bodyParse.json()
     
     mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
       console.log("Connected to MongoDB");
     });
     
     app.listen(5000, () => {
       console.log("Server started on port 5000");
     });
     