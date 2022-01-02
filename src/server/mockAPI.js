
// using dotenv to hide the API key
const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);


let json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

module.exports = json
