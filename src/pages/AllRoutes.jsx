import React from 'react';
import Navbar from '../components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Footer from '../components/Footer';





const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes