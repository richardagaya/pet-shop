// components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10 px-5 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">About Us</h2>
        <p className="text-gray-700 text-lg">
          Welcome to our Pet Shop! We are passionate about providing the best
          products and services for your furry, feathery, and scaly friends. 
          Our mission is to ensure the happiness and health of your pets, 
          offering a wide range of high-quality items, from pet food to 
          accessories and toys. Whether you're a seasoned pet owner or a 
          first-time adopter, we're here to help you every step of the way.
        </p>
        <p className="text-gray-700 text-lg mt-5">
          Visit us today and experience the difference in care and quality that 
          we bring to you and your beloved pets.
        </p>
      </div>
    </section>
  );
};

export default About;
