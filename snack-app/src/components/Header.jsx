import React from "react";
import { Link } from "react-router-dom";

const header = () =>{
    return(
            <header className="bg-gray-800 text-white py-3">
              <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center h-20">

                  <div className="flex-shrink-0 ml-[-80px] ">
                    <a href="/" className="text-2xl font-bold trackling-wide">Snackify</a>
                  </div>

                  <div className="hidden md:flex items-center space-x-6">
                    <a href></a>
                   <Link to="/"  className="hover:text-yellow-300 text-sm font-medium">Home</Link>
                   <Link to="/about" className="hover:text-yellow-300 text-sm font-medium">About Us</Link>
                   <Link to ="/productdetails" className="hover:text-yellow-300 text-sm font-medium">Snacks</Link>
                   <Link to="/order">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-md">
                Order Now
              </button>
            </Link>
                    
                  </div>
 
                  <div className="md:hidden">
                    <button type="button" className="bg-yellow-500 hover:bg-yellow-100 inline-flex items-center justify-center p-3 rounded-md text-gray-900 hover:text-yellow-400 hover:bg-black-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                      <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                  </div>

                </div>

              </nav>

            </header>
    );
}
export default header;