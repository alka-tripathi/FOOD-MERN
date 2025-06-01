import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [credential, setCredential] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  });

  //here frontened se API CALL example   --> store the data in backend
  const handleSubmit = async (e) => {
    //syntatic event
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //kaunse type ka data hai
      },
      //backened mai jo hum data bheje ge
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert('enter valid credential');
    } else {
      alert('User created successfully');
      // Optionally redirect to login page
    }
  };
  const onChange = (event) => {
    setCredential({ ...credential, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credential.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credential.email}
              onChange={onChange}
            />
            <div
              id="emailHelp"
              className="form-text"
            >
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credential.password}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label
              // htmlFor="exampleInputPassword1"
              className="form-label"
            >
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={credential.geolocation}
              onChange={onChange}
            />
          </div>
          {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
          <button
            type="submit"
            className="m-3 btn btn-success"
          >
            Submit
          </button>
          <Link
            to="/login"
            className="m-3 btn btn-danger"
          >
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}
