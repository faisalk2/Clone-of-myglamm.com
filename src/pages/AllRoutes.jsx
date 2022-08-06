import React from 'react';
import Navbar from '../components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Footer from '../components/Footer';
import { CheckOut } from './CheckOut';
import { MyBag } from './MyBag';
import NavbarBag from '../components/NavbarBag';
import { FooterC } from '../components/FooterC';
import NavbarCheckout from '../components/NavbarCheckout';
import { Address } from './Address';
import NavbarAddress from '../components/NavbarAddress';
import Payment from './Payment';
// import Productpage from './Productpage';
import { Box, Text } from '@chakra-ui/react';
import NotFound from './NotFound';
import Navbarpayment from '../components/NavbarPayment';
import ProductItem from '../components/products/Product';
import SingleProduct from '../components/products/SingleProduct';





const AllRoutes = () => {

  return (
    <Box>
     
        <Routes>
            <Route path='/' element={  <> <Navbar/><Home/> <Footer/></>}></Route>
            <Route path='/product/:type' element={<><Navbar/><ProductItem/><Footer/></>}></Route>
            <Route path='/product/:type/:id' element={<><Navbar/><SingleProduct/><Footer/></>}></Route>
            <Route path='/checkout' element={<><NavbarCheckout/><CheckOut/><FooterC/></>}></Route>
            <Route path='/mybag' element={<><NavbarBag/><MyBag/><FooterC/></>}/>
            <Route path='/address' element={<><NavbarAddress/><Address/><FooterC/></>}/>
            <Route path='/payment' element={<><Navbarpayment/><Payment/><FooterC/></>}></Route>
            <Route path='*' element={<><Navbar/><NotFound/><Footer/></>}></Route>
            <Route path='/payment' element={<><Navbarpayment/><Payment/></>}/>
        </Routes>
  
    </Box>
  )
}

export default AllRoutes