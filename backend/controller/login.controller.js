const { UserModel } = require("../models/login.models");

const register = async (req, res) => {
    const {username , password} = req.body;
    try {
        const user = await UserModel.findOne({ username });
        if (user) {
            res.status(200).json({ "Message": `User with username ${username} is already register` });
            return;
        }

        const newuser = new UserModel({
            username, 
            password
        });
        await newuser.save();
        res.status(200).json({ "Message": `New user with username ${username} register successfull` })
    } catch (error) {
        res.status(500).json({ "Error": error.message })
    }
}

const login = async (req, res) => {
    const { username , password } = req.body;
    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            res.status(200).json({ "Message": `User not found` })
        }
        else if (user.password == password ) {
            res.status(200).json({ "Message": `Login successfull` })
        }
        else{
              res.status(200).json({"Message":"Password not correct"})
        }
    } catch (error) {
        res.status(500).json({ "Error": error.message })
    }

}



module.exports = {

    login, 
    register


}