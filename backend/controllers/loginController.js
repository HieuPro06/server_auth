const User = require("../model/User");
const loginController = async (req,res) => {
    const user = await User.findOne({
        username: req.body.username
    })
    if(user){
        if(user.password === req.body.password){
            res.json("Login successfully");
        } else{
            res.json("Wrong password");
        }
    } else{
        res.json("Account invalid");
    }
}

module.exports = loginController;