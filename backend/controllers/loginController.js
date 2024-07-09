const User = require("../model/User");
const loginController = async (req,res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        })
        if(user){
            if(user.password === req.body.password){
                res.json("Login successfully");
                return user;
            } else{
                res.json("Wrong password");
            }
        } else{
            res.json("Account invalid");
        }
    } catch (error) {
        res.json(error);
    }
}

module.exports = loginController;