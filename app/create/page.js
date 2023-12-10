import BlogForm from "@components/BlogForm"
import { revalidatePath } from "next/cache"

export const metadata = {
    title: 'Blogmate - Create your blog',
    description: 'This page let your create your own blog !',
}

const CreateBlog = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto w-[90%]">
                <h1 className="text-xl md:text-2xl lg:text-3xl">Create your blog</h1>
                <BlogForm />
            </div>
        </div>
    )
}

export default CreateBlog
