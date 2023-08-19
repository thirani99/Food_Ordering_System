// const express = require("express");

// const db= require("./db")

// const app = express();

// app.use(express.json());

//  app.get("/",(req,res)=>{
//     res.send("Server working" +port);
//  });

//  const port = process.env.PORT || 5000;

//  app.listen(port, () => 'Server running on port port' );





// const express = require("express");

// const Cake = require('./models/cakeModels')

// const db = require("./db");

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Server working on port " + port);
// });

// app.get("/getcakes", (req, res) => {
//    Cake.find({}, (err, docs) => {
//        if (err) {
//            console.log("Error fetching cakes:", err); // Simulated error with a custom error message
//            res.status(500).send("Internal Server Error");
//        } else {
//            res.send(docs);
//        }
//    });
// });


// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });





const express = require("express");
const Cake = require('./models/cakeModels');
const db = require("./db");
const app = express();

app.use(express.json());


const cakesRoute = require('./routes/cakesRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/cakes', cakesRoute)
app.use('/api/users', userRoute)

app.get("/", (req, res) => {
    res.send("Server working on port " + port);
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

