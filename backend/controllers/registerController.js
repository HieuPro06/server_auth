const User = require("../model/User");
const registerController = async (req,res) => {
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
    try {
        await user.save();
        res.json(user);
    } catch (error) {
        res.json(error);
    }
}

module.exports = registerController;