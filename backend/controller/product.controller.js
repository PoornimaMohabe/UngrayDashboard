const { ProductModel } = require("../models/products.model");

const createProduct = async (req, res) => {
    const payload = req.body;
    try {
        const product = new ProductModel(payload);
        await product.save();
        res.status(200).json({ "msg": "new product addded" })


    } catch (error) {
        res.status(400).json({ error })
    }
}

// 

const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.find();
        res.status(200).json({ "msg": "all product data", product })

    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = {
    createProduct,
    getProduct
}