import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between lg:justify-around items-center">
            {/* Logo */}
                <Link href="/">
                    <p className="text-blue-400 text-xl md:text-2xl lg:text-3xl font-bold tracking-wider">BLOG🧠MATE</p>
                </Link>
        
                {/* Nav Links */}
                <div className="space-x-4 gap-6 text-lg hidden lg:flex">
                    <Link href="/">
                    <p className="text-white hover:underline hover:underline-offset-2 transition duration-300">Home🏠</p>
                    </Link>
                    <Link href="/blogs">
                    <p className="text-white hover:underline hover:underline-offset-2 transition duration-300">All Blogs📝</p>
                    </Link>
                    <Link href="/about">
                    <p className="text-white hover:underline hover:underline-offset-2 transition duration-300">About📱</p>
                    </Link>
                    {/* Add more nav links as needed for your blog */}
                </div>
        
                {/* Sign In and Create Buttons */}
                <div className="flex space-x-2">
                    <Link className="hidden sm:block" href="/signin">
                    <p className=" border-2 border-blue-500 text-[0.9rem] text-white px-4 py-2 rounded-full transition duration-300">Sign In</p>
                    </Link>
                    <Link href="/create">
                    <p className="bg-blue-500 text-white text-[0.9rem] px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                        Create Blog
                    </p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
