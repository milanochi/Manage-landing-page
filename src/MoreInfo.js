import React from 'react';
import './App.css';



const MoreInfo = () => {
  return (
    <div>
         {/* <!--MORE INFO--> */}
                             <section id="info" class="bg-brightRed" >
                                 <div class="container mx-auto flex flex-col p-12 space-y-8 text-center items-center mt-16 md:justify-between md:flex-row md:text-left md:space-y-0 md:px-10" id="cta">
                                    <h1 class="max-w-md text-center text-white text-4xl font-sem-bold items-start md:text-5xl md:text-left md:w-1/2 md:text-3xl">  Bring everyone together to build better products.</h1>
                                    <div>
                                        <a href="#" id="login" class="rounded-full bg-white text-brightRed p-3 px-10 font-bold baseline" >Get Started</a>
                                    </div>
                                   
                                </div>
                             </section>
    </div>
  )
}

export default MoreInfo