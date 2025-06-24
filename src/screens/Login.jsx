import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function Login() {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });

  //here frontened se API CALL example   --> store the data in backend
  const handleSubmit = async (e) => {
    //syntatic event
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //kaunse type ka data hai
      },
      //backened mai jo hum data bheje ge
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert('enter valid credential');
    }
    //     if(json.success){
    //  alert("valid data")
    //     }

    if (json.success) {
      localStorage.setItem("userEmail",credential.email);
      localStorage.setItem('authtoken', json.authtoken); //local storage mai data store karna hai
      console.log(localStorage.getItem('authtoken'));
      navigate('/');
      alert('Login successful');
      //redirect to home page
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
            ></div>
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

          <button
            type="submit"
            className="m-3 btn btn-success"
          >
            Submit
          </button>
          <Link
            to="/createuser"
            className="m-3 btn btn-danger"
          >
            I'm a new user
          </Link>
        </form>
      </div>
    </>
  );
}
