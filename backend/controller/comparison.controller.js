const { ComparisonModel } = require("../models/comparison.model");

const createcomparison = async (req, res) => {
    const payload = req.body;
    try {
        const comparison = new ComparisonModel(payload);
        await comparison.save();
        res.status(200).json({ "msg": "new comparison data addded" })


    } catch (error) {
        res.status(400).json({ error })
    }
}


// getcomparison 

const getComparison = async (req, res) => {
    try {
        const comparison = await ComparisonModel.find();
        res.status(200).json({ "msg": "comparison data", comparison })

    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports={
    createcomparison,
    getComparison
}