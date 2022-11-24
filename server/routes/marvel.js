//controller for routes
const express = require("express")
const router = express.Router();
const myFunctions = require('../models/marvel.js')

//create GET request for route for users
router.get('/', myFunctions.getAll);

//get user by id
router.get('/:id', myFunctions.getByID);

module.exports = router;