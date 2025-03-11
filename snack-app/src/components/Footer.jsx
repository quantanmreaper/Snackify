import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">About Us</h4>
          <p className="text-gray-300">
            Snackify brings you the best homemade snacks from across the globe.
            Crafted with care and delivered with love.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-300 text-m font-medium">Home</Link>
            </li>
            <li>
             <Link to="/about" className="hover:text-yellow-300 text-m font-medium">About Us</Link>
             
            </li>
            <li>
            <Link to="/" className="hover:text-yellow-300 text-m font-medium">Snacks</Link>
              
            </li>

            <li>
            <Link to="/" className="hover:text-yellow-300 text-m font-medium">Contact Us</Link>
            </li>
          </ul>

        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Subscribe</h4>
          <p className="text-gray-300 mb-4">
            Stay updated with our latest snack collections!
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-800"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.35 3.433 9.8 8.208 11.373-.113-.98-.217-2.487.046-3.558.24-.992 1.548-6.308 1.548-6.308s-.394-.789-.394-1.954c0-1.83 1.062-3.197 2.386-3.197 1.125 0 1.666.844 1.666 1.854 0 1.13-.72 2.824-1.094 4.393-.315 1.332.67 2.418 1.99 2.418 2.39 0 4.224-2.519 4.224-6.144 0-3.206-2.306-5.45-5.589-5.45-3.81 0-6.048 2.861-6.048 5.814 0 1.153.445 2.392.994 3.063.11.131.126.246.093.379-.102.412-.328 1.318-.371 1.501-.059.247-.192.299-.444.18-1.66-.77-2.697-3.191-2.697-5.136 0-4.188 3.041-8.045 8.775-8.045 4.607 0 8.197 3.285 8.197 7.675 0 4.577-2.884 8.257-6.894 8.257-1.346 0-2.613-.696-3.046-1.475l-.828 3.157c-.301 1.147-1.118 2.584-1.67 3.46C9.26 23.777 10.61 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M22.675 0h-21.35C.592 0 0 .593 0 1.326v21.348C0 23.407.592 24 1.326 24h11.497v-9.294H9.691v-3.622h3.132V8.413c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.326-.592 1.326-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
              </svg>

            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.975 1.258 2.243 1.32 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.32 3.608-.975.975-2.243 1.258-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.32-.975-.975-1.258-2.243-1.32-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.344-2.633 1.32-3.608.975-.975 2.243-1.258 3.608-1.32 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.053.072 5.776.13 4.621.36 3.678.996c-.943.637-1.736 1.431-2.373 2.373C.36 4.621.13 5.776.072 7.053.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.947.058 1.277.288 2.432.926 3.375.637.943 1.431 1.736 2.373 2.373.943.637 2.098.867 3.375.926 1.277.058 1.686.072 4.947.072s3.668-.014 4.947-.072c1.277-.058 2.432-.288 3.375-.926.943-.637 1.736-1.431 2.373-2.373.637-.943.867-2.098.926-3.375.058-1.277.072-1.686.072-4.947s-.014-3.668-.072-4.947c-.058-1.277-.288-2.432-.926-3.375-.637-.943-1.431-1.736-2.373-2.373-.943-.637-2.098-.867-3.375-.926C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
              </svg>
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M24 4.556a9.927 9.927 0 01-2.828.775 4.935 4.935 0 002.164-2.724 9.869 9.869 0 01-3.127 1.194A4.916 4.916 0 0016.846 3c-2.72 0-4.923 2.205-4.923 4.924 0 .387.045.763.129 1.124A13.978 13.978 0 011.671 3.149 4.926 4.926 0 003.188 9.07a4.886 4.886 0 01-2.231-.617v.062c0 2.296 1.633 4.213 3.8 4.646a4.9 4.9 0 01-2.224.084 4.928 4.928 0 004.604 3.417 9.867 9.867 0 01-7.29 2.034A13.935 13.935 0 008.29 21c9.142 0 14.308-7.569 14.308-14.142 0-.216-.004-.431-.014-.644A10.271 10.271 0 0024 4.556z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-white-500">
        &copy; 2025 Snackify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
