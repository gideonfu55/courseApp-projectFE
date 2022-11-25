import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Place any new pages as a Route element inside the Routes tag
      Optional: update NavBar element to expose the routes*/}
      <Routes>
        <Route path='/register' element ={<Register />}/>
        <Route path='/login' element ={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
