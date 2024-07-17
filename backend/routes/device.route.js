const express = require("express");
const { createcomparison, getComparison } = require("../controller/comparison.controller");
const { createdevice, getdevicedata } = require("../controller/device.controller");
const deviceRoute = express.Router();


deviceRoute.post("/device", createdevice);
deviceRoute.get("/device", getdevicedata);

module.exports ={
    deviceRoute
}