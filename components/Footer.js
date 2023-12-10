const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6">
        <div className="container mx-auto text-center">
          {/* Footer content */}
          <p className="text-lg font-semibold mb-4">Connect with Me</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Twitter
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              LinkedIn
            </a>
            <span>|</span>

            <a href="#" className="hover:text-gray-300 transition duration-300">
              Instagram
            </a>
          </div>
  
          {/* Copyright and other information */}
          <p className="mt-6 text-sm">
            &copy; 2023 Blogmate. All rights reserved. | Designed with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            by Varghab
          </p>
        </div>
      </footer>
    )
}

export default Footer
