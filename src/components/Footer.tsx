"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
    </footer>
  );
};

export default Footer;