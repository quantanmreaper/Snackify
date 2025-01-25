import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-3">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center  h-20"> {/* Increased height from h-16 to h-20 */}
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              {/* Placeholder logo */}
              {/* <img className="h-12 w-12" src="https://via.placeholder.com/48" alt="Snack Haven Logo" /> */}
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6"> {/* Increased space between items */}
                <a href="#" className="hover:text-yellow-300 px-4 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="hover:text-yellow-300 px-4 py-2 rounded-md text-sm font-medium">Our Snacks</a>
                <a href="#" className="hover:text-yellow-300 px-4 py-2 rounded-md text-sm font-medium">Healthy Choices</a>
                <a href="#" className="hover:text-yellow-300 px-4 py-2 rounded-md text-sm font-medium">About Us</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-md"> {/* Larger button padding */}
                Order Now
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="bg-white inline-flex items-center justify-center p-3 rounded-md text-orange-600 hover:text-orange-500 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">
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

export default Header;
