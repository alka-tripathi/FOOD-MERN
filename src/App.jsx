import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './screens/Home.jsx';
import Login from './screens/Login.jsx';
import SignUp  from './screens/SignUp.jsx';



import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import '../node_modules/bootstrap/dist/js/min.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from './screens/SignUp.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/login"
            element={<Login />}
          />
          <Route exact path='/createuser' element={<SignUp></SignUp>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
