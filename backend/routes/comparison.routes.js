const express = require("express");
const { createcomparison, getComparison } = require("../controller/comparison.controller");
const comparisonRoute = express.Router();


comparisonRoute.post("/comparison", createcomparison);
comparisonRoute.get("/comparison", getComparison);

module.exports ={
    comparisonRoute
}