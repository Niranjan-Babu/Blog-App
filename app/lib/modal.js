import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        min:3,
        max:20,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        min:3,
        max:20,
    },
    password:{
        type: String,
        required: true,
        
    },
},{timestamps: true });

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        min:3,
        max:20,
    },
    content:{
        type: String,
        required: true,
        unique: true,
        
    },
    category:{
        type: String,
        required: true,
        unique: true,
    },
    
    creatername:{
        type: String,
        required: true,
    },
    createremail:{
        type: String,
        required: true,
        unique: true,
        min:3,
        max:20,
    },
},{timestamps: true });

export const User = mongoose.models.User || mongoose.model("User",userSchema);
export const Blog = mongoose.models.Blog || mongoose.model("Blog",blogSchema);
