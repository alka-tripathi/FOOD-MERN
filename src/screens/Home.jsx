import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>Body</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
