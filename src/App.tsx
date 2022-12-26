import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register'
import AddCourse from './components/addCourse/AddCourse'
import Checkout from './components/checkout/Checkout'

import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Card from './components/card/Card'
import CourseCatalogue from './components/courseCatalogue/CourseCatalogue'
import NavBar1 from './components/navbar/NavBar'

function App() {
    return (
        <div className="App">
            {/* <NavBar /> */}
            <NavBar />
            {/* Place any new pages as a Route element inside the Routes tag
      Optional: update NavBar element to expose the routes*/}
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/addCourse" element={<AddCourse />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/catalogue" element={<CourseCatalogue />} />
            </Routes>
        </div>
    )
}

export default App
