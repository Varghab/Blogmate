import { BlogModel } from "@models/blog.model";
import { revalidatePath } from "next/cache";


export async function GET(request){
    console.log("Inside Get all blogs route");
    const allBlogs = await BlogModel.find();
    return Response.json({success:true, result:allBlogs})
} 
