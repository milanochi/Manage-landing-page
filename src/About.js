import React from 'react';
import './App.css';


const About = () => {
  return (
    <div>
        
        {/* <!---ABOUT US--> */}
                    <section id="about">
                            <div className="container mx-auto mt-10 flex px-6 flex-col items-start space-y-0 md:space-y-0 md:flex-row">
                                <div className="flex flex-col space-y-12 md:w-1/2 mb-12">
                                    <h1 className="max-w-md  text-center text-4xl text-darkBlue font-bold items-start md:text-5xl md:text-left">What’s different about Manage?
                                    </h1>
                                    <p className="max-w-sm text-center text-grayishBlue md:text-left"> Manage provides all the functionality your team needs, without 
                                        the complexity. Our software is tailor-made for modern digital 
                                        product teams.</p>
                                </div>
                                {/* <!--RIGHT DIV--> */}
                              <div className="flex flex-col  space-y-8 md:w-1/2">
                                        {/* <!--EACH ITEM--> */}
                                        <div className="space-y-4">
                                            <div className="flex bg-paleRed rounded-full pr-0 p-0 items-center md:bg-white">
                                                <a href="#" className="rounded-full bg-brightRed p-3 px-6 pt-2  text-white font-bold baseline" >01</a>
                                                <h2 className=" px-4 text-darkBlue font-bold max-w-sm">Track company-wide progress
                                                  </h2>
                                            </div>
                                            <p className="text-left leading-6 text-sm text-grayishBlue md:text-left md:bg-white"> Manage provides all the functionality your team needs, without 
                                                the complexity. Our software is tailor-made for modern digital 
                                                product teams.</p>
                                        </div>
                                      
                                             {/* <!--EACH ITEM2--> */}
                                             <div className="space-y-4">
                                                <div className="flex bg-paleRed rounded-full items-center md:bg-white">
                                                    <a href="#" className="rounded-full bg-brightRed p-3 px-6 pt-2  text-white font-bold baseline" >02</a>
                                                    <h2 className=" px-4 text-darkBlue font-bold max-w-sm">Advanced Built in reports
                                                      </h2>
                                                </div>
                                                <p className="text-left leading-6 text-sm text-grayishBlue md:text-left"> Set internal delivery estimates and track progress toward company 
                                                    goals. Our customisable dashboard helps you build out the reports 
                                                    you need to keep key stakeholders informed..</p>
                                             </div>

                                             {/* <!--EACH ITEM 3--> */}
                                             <div className="space-y-4">
                                                <div className="flex bg-paleRed rounded-full items-center md:bg-white">
                                                    <a href="#" className="rounded-full bg-brightRed p-3 px-6 pt-2  text-white font-bold baseline" >03</a>
                                                    <h2 className=" px-4 text-darkBlue font-bold max-w-sm">Advanced Built in reports
                                                      </h2>
                                                </div>
                                                <p className="text-left text-sm leading-6 text-grayishBlue md:text-left"> Set internal delivery estimates and track progress toward company 
                                                    goals. Our customisable dashboard helps you build out the reports 
                                                    you need to keep key stakeholders informed</p>
                                             </div>
                                       
                                    </div>

                            </div>
                    </section>
    </div>
  )
}

export default About