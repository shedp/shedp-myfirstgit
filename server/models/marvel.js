//import database
const marvelData = require("../database");

const getAll = (req, res) => {
    res.send(marvelData);
}

const getByID = (req, res) => {
    const id = req.params.id;
    const foundData = marvelData.find((item) => item.id === id);
    res.send(foundData)
}

module.exports = {
    getAll,
    getByID,

}