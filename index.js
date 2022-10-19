const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const server = express();
dotenv.config();

const port = process.env.port;

server.get('/', (req,res)=>{
    res.send('hola mundo');
})

server.listen(port, ()=> {
    console.log(`Estoy en el puerto ${port}`.yellow.inverse);
})