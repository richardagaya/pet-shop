"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import About from "./components/about";
import Footer from "./components/Footer";

const Home = () => {
  const [showDetails, setShowDetails] = useState(true);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4">
        <div className="text-lg font-bold">PET SHOP</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <span className="cursor-pointer hover:text-gray-300">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="cursor-pointer hover:text-gray-300">About</span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="cursor-pointer hover:text-gray-300">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="cursor-pointer hover:text-gray-300">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center bg-yellow-200 p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Everything for Your Pet
        </h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Image
          src="/hero.png"
          alt="Happy Dog"
          width={250}
          height={250}
          className="mx-auto"
        />
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={handleToggleDetails}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Learn More
          </button>
        </div>
        {showDetails && (
          <div className="mt-4 text-gray-600">
            Detailed information about pet care and products.
          </div>
        )}
      </header>

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
