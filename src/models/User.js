const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name:{
            typeof:String,
            require:true
        },
        username:{
            typeof:String,
            require:true
        },
        email:{
            typeof:String,
            require:true,
            unique: true
        },
        password:{
            typeof:String,
            require:true
        }

    });

    
const User = mongoose.model("User", UserSchema);

module.exports = User;