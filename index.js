const express = require("express");
const app = express();
var cors = require('cors');

const corsOptions ={
    origin:'https://coffee-delivery-by-biancahoffer.vercel.app/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const port = process.env.PORT /*Heroku*/ || 8080;

const coffees = require("./src/coffees/coffee.json")

app.get("/coffees", (req, res) => {
    return res.json(coffees);
});

app.listen(port, () => { // Heroku
    console.log("Servidor rodando.")
}); 

app.use(cors(corsOptions))

//