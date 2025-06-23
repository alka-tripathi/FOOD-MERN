import React, { useState, useEffect } from 'react';
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {
  let dispatch = useDispatchCart();

  let data = useCart();

  // useEffect(() => {
  //   console.log('Updated Cart Items: ', data);
  // }, [data]);

  let options = props.options;

  //keys we have display
  let priceOption = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('');

  useEffect(() => {
    setSize(priceOption[0]);
  }, [priceOption]);

  //let foodItem = props.foo

  //let fooditem = props.fooditem;

  //add to cart control
  const handlecart = async () => {
    const finalprice = qty * parseInt(options[size] || 0);
    await dispatch({
      type: 'ADD',
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalprice,
      qty: qty,
      size: size,
      img: props.foodItem.img,
    });
    console.log(data);
  };
  return (
    <div
      className="card mt-3"
      style={{ width: '18rem', maxHeight: '360px' }}
    >
      <img
        src={props.foodItem.img}
        className="card-img-top"
        alt="..."
        style={{ height: '150px', objectFit: 'fill' }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.foodItem.name}</h5>

        <div className="container w-100">
          <select
            className="m-2 h-100  bg-success rounded"
            onChange={(e) => setQty(parseInt(e.target.value))}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option
                  key={i + 1}
                  value={i + 1}
                >
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select
            className="m-2 h-100  bg-success rounded"
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOption.map((data) => {
              return (
                <option
                  key={data}
                  value={data}
                >
                  {data}
                </option>
              );
            })}
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
          <hr></hr>
          <button
            onClick={handlecart}
            className="bg-white rounded text-success"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
