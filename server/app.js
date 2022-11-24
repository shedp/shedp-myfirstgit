const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const marvelIdRoutes = require("./routes/marvel");

app.get('/', (req,res) => {
    res.redirect(200, "/marvels");
})

// app.get('/:character', (req,res) =>
// {
// })

app.post('/', (req, res) => {
    res.status(405).send("Method not allowed")
})

app.listen (port, () => {
    console.log(`I am listening at http://localhost:${port}`)
})

app.use(bodyParser.json());
app.use("/marvels", marvelIdRoutes);

module.exports = app;