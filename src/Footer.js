import React from 'react';
import './App.css';
import Logo from './images/logo.svg'
import Facebook from './images/icon-facebook.svg';
import Youtube from './images/icon-youtube.svg';
import Twitter from './images/icon-twitter.svg'
import Pin from './images/icon-pinterest.svg';
import Insta from './images/icon-instagram.svg';
const Footer = () => {
  return (
    <div>
         <section id="info" class="bg-darkestBlue">
                                <div class="container mx-auto flex flex-col-reverse justify-between px-6 py-10 space-x-8 space-y-8 md:flex-row md:space-y-0">
                                    
                                                   {/* <!---LOGO--> */}
                                    <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">

                                       <div class=" mx-auto my-6 text-center text-white text-sm md: hidden">copyright 2023</div>

                                        <img src={Logo}  alt="logo" />
                                        <div class="flex justify-center space-x-4 ">
                                            <img src={Facebook} class="h-8" alt="link" />
                                            <img src={Youtube} class="h-8" alt="link" />
                                            <img src={Twitter} class="h-8" alt="link" />
                                            <img src={Pin} class="h-8" alt="link" />
                                            <img src={Insta} class="h-8" alt="link" />

                                        </div>
                                  
                                    </div>
                                        {/* <!--SECONDARY NAVLINKS--> */}
                                        <div class="flex justify-around space-x-32 md:w-1/3">
                                            <div class="flex flex-col space-y-4">
                                                <a href="#" class="text-white text-sm font-semiBold">Pricing</a>
                                                <a href="#" class="text-white text-sm font-semiBold"> Product</a>
                                                <a href="#" class="text-white text-sm font-semiBold">About Us</a>
                                                <a href="#" class="text-white text-sm font-semiBold">Careers</a>
                                            </div>
                                            {/* <!--SECONDARY RIGHT LINKS--> */}
                                            
                                                <div class="flex flex-col space-y-4">
                                                    <a href="#" class="text-white text-sm font-semiBold">Pricing</a>
                                                    <a href="#" class="text-white text-sm font-semiBold"> Product</a>
                                                    <a href="#" class="text-white text-sm font-semiBold">About Us</a>
                                                </div>
                                    
                                        </div>
                                       {/* <!--EMAIL LISTING--> */}
                                    <div class="flex flex-col justify-between">
                                       <form>
                                           <div class="flex space-x-3">
                                            <input type="text" placeholder="Updates in your inbox..." class="rounded-full bg-white flex-1 px-4 text-sm baseline focus:outline-none" />
                                            <a href="#" id="login" class="rounded-full text-white bg-brightRed p-3 px-6 font-semiBold baseline" >Go</a>
                                        
                                           </div>
                                    
                                       </form>
                                          
                                    </div>
                                              
                                  
                               </div>
                            </section>
    </div>
  )
}

export default Footer