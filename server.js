require('dotenv').config()
const express = require("express");

const app = express();

app.get('/', (req, res)=>{
 res.json('Hello Docker World!');
})

app.listen(process.env.DOCKERPORT, ()=>{
    console.log(`Server started on http://localhost:${process.env.LOCALPORT}`); 
})