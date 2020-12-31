const express = require('express')

//database connection
require('./config/config')

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`using environment ${process.env.NODE_ENV}`)
    console.log(`listening on port ${port}`)
})

module.exports = app