const express = require("express");
const { createRating, getRatingdata } = require("../controller/rating.controller");

const ratingRoute = express.Router();


ratingRoute.post("/rating", createRating);
ratingRoute.get("/rating", getRatingdata);

module.exports ={
    ratingRoute
}