import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './UserAuth/Login';
import Register from './UserAuth/Register';
import PageNotFound from './Core/PageNotFound/PageNotFound';

import './App.css';

function App() {

  // const { pathname } = window.location;

  return (
    <div>
       <Router>
        
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>

        </Router>
    </div>
  );
}

export default App;
