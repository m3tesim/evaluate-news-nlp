
var path = require('path')
const express = require('express')
var FormData = require('form-data');
var fetch = require('node-fetch');





 app = express()
 // Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

//using dotenv to hide the API key
const dotenv = require("dotenv");
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);




/************************************** */
  app.post('/api', getData)
  
  
  
 async function getData (req, res) {
    formText = req.body.url;

    const formdata = new FormData();
    formdata.append("key", "39a89f5710f5be086c717af66b779f45");
    formdata.append("url", formText);
    formdata.append("lang", "auto"); // 2-letter code, like en es fr ...
    
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const response =  await fetch(
        "https://api.meaningcloud.com/sentiment-2.1",
        requestOptions
      )
       /* .then((response) => ({
          status: response.status,
          body: response.json(),
        }))
         .then(({ status, body }) => console.log(status, body))
        .catch((error) => console.log("error", error));
  */
       const newData =await response.json();
       console.log(newData);
    // res.send(newData)
    //  server sends only specified data to the client with below codes
    projectData = {
      score_tag: newData.score_tag,
      agreement: newData.agreement,
      subjectivity: newData.subjectivity,
      confidence: newData.confidence,
      irony: newData.irony,
    };
    res.send(projectData);
  };


  // GET route
app.get('/all', (req,res)=>{res.send(projectData);});
