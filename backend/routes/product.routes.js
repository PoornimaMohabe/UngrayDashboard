const express = require("express");
const { createProduct, getProduct } = require("../controller/product.controller");

const productonRoute = express.Router();


productonRoute.post("/product", createProduct);
productonRoute.get("/product", getProduct);

module.exports ={
    productonRoute
}