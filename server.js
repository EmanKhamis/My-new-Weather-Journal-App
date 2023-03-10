// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

const port = 5000;
// Setup Server
app.listen(port, function () {
  console.log(`startin server on port ${port}`);
});

app.get("/data", function (req, res) {
  res.send(projectData);
});

/*app.post("/postdata", (req, res) => {
  let data = req.body;
  projectData = {
    temp: data.temp,
    date: data.date,
    content: data.content,
  };
});*/

app.post("/postdata", addD);
function addD(req, res) {
  console.log(req.body);
  newD = {
    temp: req.body.temp,
    date: req.body.date,
    content: req.body.content,
  };
  projectData = newD;
}
