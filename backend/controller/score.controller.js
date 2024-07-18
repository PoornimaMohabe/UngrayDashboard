const { ScoreModel } = require("../models/score.model");

const createScore = async (req, res) => {
    const payload = req.body;
    try {
        const score = new ScoreModel(payload);
        await score.save();
        res.status(200).json({ "msg": "new score data addded" })


    } catch (error) {
        res.status(400).json({ error })
    }
}




const getScoredata = async (req, res) => {
    try {
        const score = await ScoreModel.find();
        res.status(200).json({ "msg": "score data", score })

    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports={
    createScore,
    getScoredata
}