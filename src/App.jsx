import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './screens/Home.jsx';
import Login from './screens/Login.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
