const express = require("express");
const app = express();
const port = process.env.PORT /*Heroku*/ || 8080;

const coffees = require("./src/coffees/coffee.json")

app.get("/coffees", (req, res) => {
    return res.json(coffees);
});

app.listen(port, () => { // Heroku
    console.log("Servidor rodando.")
}); 