const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const router = require("express").Router();

const PORT = process.env.PORT || 3005;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
// app.use(express.static("client/build"));
// Add routes, both API and view

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "client/public/index.html"));
// });




// router.use(express.static(path.resolve(__dirname, 'client/build')));

router.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});





// router.get("/", function(req, res){
//    res.sendFile(path.join(__dirname, "index.html"));
// })

// app.use(routes);

// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//   {
//     useMongoClient: true
//   }
// );

// app.get("/", function(res, req){ 
//   res.sendFile(path.join(__dirname, "public/index.html"))
// })



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
