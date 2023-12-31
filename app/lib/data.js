import { connectToDb } from "./utils";
import {User,Blog} from './modal'

export const fetchUser = async (q)=>{
    const regex = new RegExp(q,"i");
const ITEM_PER_PAGE = 2
    
    try{
        connectToDb();
        const users = await User.find({username:{$regex:regex}});
        return users
        console.log(users)
    }
    catch (err){
        console.log(err)
    }
}
export const fetchBlog = async (q,page)=>{
    const regex = new RegExp(q,"i");
    const ITEM_PER_PAGE = 2
    
    try{
        connectToDb();
        const count = await Blog.find({title:{$regex:regex}}).count();
        const blogs = await Blog.find({title:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1));
        
        return {count,blogs};
        
    }
    catch (err){
        console.log(err)
    }
}
export const fetchSingleBlog = async (id)=>{
    try{
        connectToDb();
        const blog = await Blog.findById(id);
        return blog
    }
    catch (err){
        console.log(err)
    }
}