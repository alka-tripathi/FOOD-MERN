import React from 'react';
import { Link } from 'react-router-dom';

export default function Slides() {
  return (
    <div>
     
     <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="slides">
    <div className="carousel-caption" style={{zIndex:"10"}} id="carousel">
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>

  
    <div className="carousel-item active d-flex justify-content-center align-items-center" id="photos">
      <img src="/photos/dish5.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="/photos/dish7.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="/photos/dish8.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

            
          
      
      
    </div>
  );
}
