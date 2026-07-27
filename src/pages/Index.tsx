"use client";

import React from 'react';
import Nav from '../components/Nav';
import Home from '../components/Home';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;