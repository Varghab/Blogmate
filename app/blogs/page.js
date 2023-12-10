import 'server-only'

import BlogCard from "@components/BlogCard"

export const metadata = {
    title: 'Blogmate - All Blogs by Varghab',
    description: 'List of all tech related blogs'
}

export const revalidate = true;

const Blogs = async () => { 
    const getAllBlogs = async() => {
        try {
            const result = await fetch('http://localhost:3000/api/blog/getAllBlogs',{method:'GET', cache:"no-store"});
            console.log("Revalidated");
            const allBlogs = result.json();
            return allBlogs;
        } catch (error) {
            console.log("Something went wrong", error.message);
        }
    }
    const allBlogs = await getAllBlogs();
    return (
        <div className="">
            <div className="max-w-7xl mx-auto w-[90%]">
                <h1 className="text-2xl md:text-3xl text-center">All Blogs</h1>
                <div className="flex flex-col justify-center items-center sm:flex-row gap-6 mt-6 flex-wrap">
                    {allBlogs.result.length === 0 ? <p className='mt-4 text-lg text-red-400'>No Blogs to show! 😭</p> : allBlogs.result.map(blog => <BlogCard key={blog._id} title={blog.title} content={blog.content} />)}
                </div>
            </div>
        </div>
    )
}

export default Blogs
