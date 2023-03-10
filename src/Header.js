import React, { useState } from 'react';
import './App.css';
import Logo from './images/logo.svg'
import NavBar from './NavBar';


const Header = () => {
  return (
    <div>
           {/* <!--NAVBAR--> */}
     <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                {/* <!---LOGO--> */}
                <div className="pt-2">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-grayishBlue font-bold">Pricing</a>
                    <a href="#" className="text-grayishBlue font-bold"> Product</a>
                    <a href="#" className="text-grayishBlue font-bold">About Us</a>
                    <a href="#" className="text-grayishBlue font-bold">Careers</a>
                    <a href="#" className="text-grayishBlue font-bold">Community</a>
                </div>
                {/* <!--BUTTON--> */}
                <div className='block'>
                    <a href="#" className='hidden md:block'>
                        <button type="button" className="rounded-full bg-brightRed px-5 py-3 text-sm text-white font-semiBold baseline" >Get Started</button>
                                        </a> 
                    {/* <!--HAMBURGER MENU--> */}
                      <NavBar />
                </div>
            
                 
            </div>
            
                    {/* <!--MOBILE MENU--> */}
              
                   
     </nav>
    </div>
  )
}

export default Header