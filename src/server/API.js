// Setup empty JS object to act as endpoint for all routes
let projectData = {};

//using dotenv to hide the API key
const dotenv = require("dotenv");
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);




/************************************** */
  app.post('/api', async function (req, res) {

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
    const response = await fetch(
        "https://api.meaningcloud.com/sentiment-2.1",
        requestOptions
      )
        .then((response) => ({
          status: response.status,
          body: response.json(),
        }))
         .then(({ status, body }) => console.log(status, body))
        .catch((error) => console.log("error", error));
  
    const mcData = await response.json();
    console.log(mcData);
    // res.send(mcData)
    //  server sends only specified data to the client with below codes
    projectData = {
      score_tag: mcData.score_tag,
      agreement: mcData.agreement,
      subjectivity: mcData.subjectivity,
      confidence: mcData.confidence,
      irony: mcData.irony,
    };
    res.send(projectData);
  });