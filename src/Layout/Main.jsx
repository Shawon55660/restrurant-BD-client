import React from 'react';
import Navbar from '../SharedComponents/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';

const Main = () => {
    return (
       
        <div>
             <div className='w-11/12 mx-auto relative'>
             <Navbar></Navbar>
             </div>
            <div className='w-11/12 mx-auto min-h-screen '>
            <Outlet></Outlet>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default Main;