"use server"
import { redirect } from "next/navigation";
import { Blog } from "./modal";
import { connectToDb } from "./utils";
import {revalidatePath} from "next/cache"

export const addBlog = async (formData) =>{
   
    const {title,content,creatername,createremail }=formData;
    
    try{
        connectToDb();
        const newBlog = new Blog({
            title,
            content,
            creatername,
            createremail
        });
        await newBlog.save();
        console.log(newBlog);
    }catch(err){
        console.log(err)
    }
    revalidatePath("/main");
    redirect("/main");
    
}