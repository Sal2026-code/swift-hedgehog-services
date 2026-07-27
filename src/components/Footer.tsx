"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} My Application</p>
        {/* Remove the estimator */}
        {/* <div>Estimator: {estimator}</div> */}
      </div>
    </footer>
  );
};

export default Footer;