const { RatingModel } = require("../models/rating.model");

const createRating = async (req, res) => {
    const payload = req.body;
    try {
        const rating = new RatingModel(payload);
        await rating.save();
        res.status(200).json({ "msg": "new rating data addded" })


    } catch (error) {
        res.status(400).json({ error })
    }
}




const getRatingdata = async (req, res) => {
    try {
        const rating = await RatingModel.find();
        res.status(200).json({ "msg": "rating data", rating })

    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports={
    createRating,
    getRatingdata
}