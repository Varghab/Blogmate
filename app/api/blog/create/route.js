import {BlogModel} from '@models/blog.model'
import { revalidatePath } from 'next/cache';

export async function POST(req){
    console.log("Inside Post blog route");
    const body = await req.json();
    const result = await BlogModel.create(body);
    await result.save();
    revalidatePath('/blogs/page');
    return Response.json({
        success: true,
        result: body,
    })
}