import React from 'react';
import './App.css';
import Hero from './images/illustration-intro.svg'
const HeroSection = () => {
  return (
    <div>
         {/* <!--HERO SECTION--> */}
                <section id="hero">
                    
                    {/* <!--FLEX CONTAINER--> */}
                    <div className="container mx-auto mt-10 px-6 flex flex-col-reverse items-center space-y-0 md:space-y-0 md:flex-row">
                        <div className="flex flex-col mb-28 space-y-12 md:w-1/2">
                            <h1 className="max-w-md text-center text-darkBlue text-4xl font-bold items-start md:text-5xl md:text-left">  Bring everyone together to build better products.</h1>
                            <p className="max-w-sm text-center text-grayishBlue md:text-left"> Manage makes it simple for software teams to plan day-to-day 
                                tasks while keeping the larger team goals in view.</p>
                                 {/* <!--BUTTON--> */}
                                <div className="max-w-sm text-center md:text-start">
                                    <a href="#">
                                    <button type="button" className="rounded-full bg-brightRed px-5 py-3 text-sm text-white font-semiBold baseline" >Get Started</button>
                                        </a> 
                                </div>
                             
                        </div>
{/*                    
                    <!--iLLUSTRATION--> */}
                    <div className="md:w-1/2">
                        <img src={Hero} alt="animatedImg" />

                    </div>
                </div>
                </section>
    </div>
  )
}

export default HeroSection