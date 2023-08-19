// const mongoose = require("mongoose");

// var mongoURL =  "mongodb+srv://Thirani:Thiranira@cluster0.qcj5m9b.mongodb.net/mern-cakes"

// mongoose.connect(mongoURL, {useUnifieldTopology:true, useNewUrlParser:true})

// var db= mongoose.connection

// db.on('connected', ()=>{
//     console.log("Mongo DB connection Successfull")
// })


// db.on('error', ()=>{
//     console.log("Mongo DB connection failed")
// })

// module.exports = mongoose

const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://Thirani:Thiranira@cluster0.qcj5m9b.mongodb.net/mern-cakes";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on('connected', () => {
    console.log("Mongo DB connection Successful");
});

db.on('error', () => {
    console.log("Mongo DB connection failed");
});
