import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    avatar: {
        type: String, // cloudinary
        required: true
    },
    coverImage: {
        type: String
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
}, {
    timestamps:true
})

// hash the password before saving it into the database
userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next()
    bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(){
    return await bcrypt.compare(password, this.password) 
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username,
        fullname : this.fullname
    },
    process.env.ACCESS_TOKEN,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username,
        fullname : this.fullname
    },
    process.env.REFRESH_TOKEN,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
export const User = mongoose.model("User", userSchema)