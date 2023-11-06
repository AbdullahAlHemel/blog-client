import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Main = () => {
    return (
        <>
        <div className='max-w-6xl mx-auto'>
          <Navbar></Navbar> 
          <Outlet></Outlet> </div>
          <Footer></Footer>
        </>
    );
};

export default Main;