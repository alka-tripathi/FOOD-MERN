import React from 'react';
import {useCart,useDispatchCart} from './ContextReducer'

export default function Card(props) {

  let options=props.options;

  //keys we have display
  let priceOption=Object.keys(options);

  let fooditem = props.fooditems;


//add to cart control
  const handlecart=()=>{

  }
  return (
    <div
      className="card mt-3"
      style={{ width: '18rem', maxHeight: '360px' }}
    >
      <img src={props.fooditem.imgSrc} className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}}/>
      <div className="card-body">
        <h5 className="card-title">{props.fooditem.foodName}</h5>
      
        <div className="container w-100">
          <select className="m-2 h-100  bg-success rounded">
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

          <select className="m-2 h-100  bg-success rounded">
           {priceOption.map((data)=>{

            return <option key={data} value={data}>{data}</option>

           })}
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
          <hr></hr>
          <button onClick={handlecart} className="bg-white rounded text-sucess">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
