import React from 'react';
import Navbar from '../components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Footer from '../components/Footer';
import { CheckOut } from './CheckOut';
import { MyBag } from './MyBag';





const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/checkout' element={<CheckOut/>}></Route>
            <Route path='mybag' element={<MyBag/>}/>
        </Routes>
        <Footer/>
        
    </div>
  )
}

export default AllRoutes