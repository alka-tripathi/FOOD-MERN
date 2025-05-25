import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Slides  from '../components/Slides';

export default function home() {
  return (
    <div>
      <div>
        <Navbar />
       <div> <Slides></Slides></div>

        {/* card ------*/}
        <div>
          <Card />
          {/* <Card></Card> */}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
