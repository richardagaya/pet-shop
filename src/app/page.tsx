"use client"
import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">Pet Shop</h1>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className={`flex space-x-4 md:flex ${isOpen ? 'flex' : 'hidden'} md:space-x-4 md:static absolute bg-gray-800 w-full md:w-auto left-0 top-16 md:top-auto md:bg-transparent`}>
            <li className="block text-center md:inline-block">
              <Link href="/" className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent">Home</Link>
            </li>
            <li className="block text-center md:inline-block">
              <Link href="/shop" className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent">Shop</Link>
            </li>
            <li className="block text-center md:inline-block">
              <Link href="/cart" className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-10 bg-gradient-to-b from-green-200 to-white">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Pet Shop!</h1>
        <p className="text-lg mt-4 text-gray-600">
          Your one-stop shop for all pet needs. Discover a wide range of pet products from food to accessories.
        </p>
        <Link href="/shop">
          <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Additional content can go here */}
    </div>
  );
};

export default Home;
