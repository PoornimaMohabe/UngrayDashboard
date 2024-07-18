const express = require("express");
const { createScore, getScoredata } = require("../controller/score.controller");

const scoreRoute = express.Router();


scoreRoute.post("/score", createScore);
scoreRoute.get("/score", getScoredata);

module.exports ={
    scoreRoute
}