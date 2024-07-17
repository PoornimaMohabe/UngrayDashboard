const { DeviceonModel } = require("../models/device.model");

const createdevice = async (req, res) => {
    const payload = req.body;
    try {
        const device = new DeviceonModel(payload);
        await device.save();
        res.status(200).json({ "msg": "new device data addded" })


    } catch (error) {
        res.status(400).json({ error })
    }
}




const getdevicedata = async (req, res) => {
    try {
        const device = await DeviceonModel.find();
        res.status(200).json({ "msg": "device data", device })

    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports={
    createdevice,
    getdevicedata
}