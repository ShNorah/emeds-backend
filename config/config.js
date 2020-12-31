const mongoose = require('mongoose')
const { DEVELOPMENT, PRODUCTION, LOCAL } = require('./envTypes');

require("dotenv").config();

let CONNECTION_URL;
switch(process.env.NODE_ENV){
    case DEVELOPMENT:
        CONNECTION_URL = process.env.DEV_URL;
        break;
    case PRODUCTION:
        CONNECTION_URL = process.env.PRO_URL;
        break;  
    case LOCAL:
        CONNECTION_URL = process.env.LOC_URL;
        break;
        default:
        CONNECTION_URL = process.env.MONGODB_URL;    
}

mongoose.connect(CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (err) => {
        if (err) throw err;
        console.log('connection to mongodb successful')
    })
   
const db = mongoose.connect
module.exports = db    