import React from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import AddCourse from './components/AddCourse'

import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Card from './components/Card'
import CourseCatalogue from './components/CourseCatalogue'

function App() {
    return (
        <div className="App">
            <NavBar />
            {/* Place any new pages as a Route element inside the Routes tag
      Optional: update NavBar element to expose the routes*/}
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/addCourse" element={<AddCourse />} />
                <Route path="/catalogue" element={<CourseCatalogue />} />
            </Routes>
        </div>
    )
}

export default App
