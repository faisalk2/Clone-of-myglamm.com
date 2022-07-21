import React from 'react';
import Navbar from '../components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Footer from '../components/Footer';
import { CheckOut } from './CheckOut';
import { MyBag } from './MyBag';
import NavbarC from '../components/NavbarC';
import { FooterC } from '../components/FooterC';






const AllRoutes = () => {

  return (
    <div>
     
        <Routes>
            <Route path='/' element={  <> <Navbar/><Home/> <Footer/>    </>}></Route>
            <Route path='/checkout' element={<CheckOut/>}></Route>
            <Route path='mybag' element={<><MyBag/><FooterC/></>}/>
        </Routes>
     

        
        {/* <NavbarC/>
        <Routes>
      
        </Routes> */}
    </div>
  )
}

export default AllRoutes