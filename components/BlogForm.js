"use client"
import { revalidatePath } from 'next/cache';
import React, { useState } from 'react'

const BlogForm = () => {
    const [formData, setFormData] = useState({title:"", content:""});
    const [loading, setLoading] = useState(false);
    const createBlog = async(data) => {
        try {
            const blog = await fetch('http://localhost:3000/api/blog/create', {
                method: "POST",
                body: JSON.stringify(data)
            })
            const res = blog.json();
            return res;
        } catch (error) {
            console.log("An error occured!");
        }
    }
    const handleSubmit = async(e) => {
        setLoading(true);
        e.preventDefault();
        const res = await createBlog(formData);
        setFormData({title:"", content:""});
        setLoading(false);
    }

return (
    <div>
        <form onSubmit={handleSubmit} className="mt-4 text-black text-xl">
            <div>
                <input required onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})} type="text" name='title' value={formData.title} className="py-3 px-4 rounded-md outline-none w-full" placeholder="Give a title"></input>
            </div>
            <div className="mt-4">
                <textarea required onChange={(e)=> setFormData({...formData, [e.target.name]: e.target.value})} rows="8" name='content' value={formData.content} type="textarea" className="py-3 px-4 rounded-md outline-none w-full" placeholder="Your content goes here"></textarea>
            </div>
            <div className="w-28 mt-4">
                <button type='submit' disabled={loading} className="py-2 disabled:cursor-not-allowed disabled:bg-neutral-700 px-4 rounded-md w-full border-2 text-white border-blue-500">Post</button>
            </div>
        </form>
    </div>
)
}

export default BlogForm
