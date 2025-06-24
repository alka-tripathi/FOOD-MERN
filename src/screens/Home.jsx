import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Slides from '../components/Slides';



// const API_URL = import.meta.env.;
// fetch(`${API_URL}/api/foodData`)


export default function Home() {
  //seach

  const [search, setsearch] = useState('');
  const [foodcat, setFoodCat] = useState([]);

  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    //Array will be returen
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = await response.json();

    setFoodCat(response[1]);
    setFoodItem(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []); //here [] is dependency

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            style={{ objectFit: 'contain !important' }}
          >
            <div
              className="carousel-inner"
              id="slides"
            >
              <div
                className="carousel-caption"
                style={{ zIndex: '10' }}
                id="carousel"
              >
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                  />
                  {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                </form>
              </div>

              <div
                className="carousel-item active d-flex justify-content-center align-items-center"
                id="photos"
              >
                <img
                  src="/photos/dish5.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ filter: 'brightness(30%)' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/photos/dish7.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ filter: 'brightness(30%)' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/photos/dish8.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ filter: 'brightness(30%)' }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="container mt-3">
          {foodcat.length > 0 ? (
            foodcat.map((category) => (
              <div
                key={category._id}
                className="mb-4"
              >
                <h3 className="m-3">{category.CategoryName}</h3>
                <hr />

                <div className="row mb-3">
                  {foodItem.length > 0 ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === category.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filteredItem) => (
                        <div
                          key={filteredItem._id}
                          className="col-md-4 mb-3 col-12 col-lg-3"
                        >
                          <Card
                            foodItem={filteredItem}
                            foodName={filteredItem.name}
                            options={filteredItem.options[0]}
                            //options={food.options}
                            imgSrc={filteredItem.img}
                          />
                        </div>
                      ))
                  ) : (
                    <div>No food items found.</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
