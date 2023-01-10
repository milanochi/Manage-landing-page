import React from 'react';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import User from './images/avatar-anisha.png';
import User2 from './images/avatar-ali.png';
import User3  from './images/avatar-richard.png';
const Testimonials = () => {
  return (
    <div>
    

<section id="testimony">
    <div class=" container max-w-6xl bg-yellow mx-auto space-y-8 flex flex-col px-6 text-center mt-32 md:block">
        <h2 class="px-4 text-darkBlue font-bold text-3xl mb-18 md:mb-24"> What they’ve said</h2>
        {/* <!--TESTIMONIES--> */}
        <div class="hidden flex  flex-col items-center md:space-x-6  md:flex-row md:flex">
               {/* <!--USER 1--> */}
               <div class="flex flex-col items-center bg-gray-100 p-6 space-y-6 md:w-1/3">
                   <img src={User} class="-mt-14 w-16" alt="userImg" />
                   <h2 class=" px-4 text-2xl text-darkBlue font-bold ">Anisha Vasquez
                   </h2>
                   <p class="text-left text-sm text-grayishBlue md:text-center">“Set internal delivery estimates and track progress toward company
                       goals. Our customisable dashboard helps you build out” </p>
               </div>
               
                 {/* <!--USER 2--> */}
                 <div class="hidden flex flex-col items-center bg-gray-100 p-6 space-y-6 md:w-1/3 md:flex">
                   <img src={User2} class="-mt-14 w-16" alt="userImg" />
                   <h2 class=" px-4 text-2xl text-darkBlue font-bold ">Chisom Theckla
                   </h2>
                   <p class="text-left text-sm text-grayishBlue md:text-center">“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel ” </p>
               </div>
                 {/* <!--USER 3--> */}
                 <div class="hidden flex flex-col items-center bg-gray-100 p-6 space-y-6 md:w-1/3 md:flex">
                   <img src={User3} class="-mt-14 w-16" alt="userImg" />
                   <h2 class=" px-4 text-2xl text-darkBlue font-bold ">Jameson Cloft
                   </h2>
                   <p class="text-left text-grayishBlue text-sm md:text-center">“Their software allows us to track, manage and collaborate on our project from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
               </div>
               
        </div>
        <Swiper 
            modules ={[Navigation, EffectFade, Pagination]}
            navigation
            effect
            pagination={{ clickable: true }}
            speed={500}
            slidesPerView={1}
            className='myswiper container md:hidden '>
            <SwiperSlide className='swiperslide'>
               {/* <!--USER 1--> */}
               <div class="flex flex-col items-center bg-gray-100 p-6 px-8 space-y-6">
                   <img src={User} class="-mt-14 w-16" alt="userImg" />
                   <h2 class=" px-4 text-2xl text-darkBlue font-bold ">Anisha Vasquez
                   </h2>
                   <p class="text-center text-sm text-grayishBlue md:text-center">“Set internal delivery estimates and track progress toward company”
                       goals. Our customisable dashboard helps you build out </p>
               </div>
            </SwiperSlide>
            <SwiperSlide className='swiperslide'>
                 {/* <!--USER 2--> */}
                 <div class=" flex flex-col items-center bg-gray-100 p-6 px-8 space-y-6 ">
                   <img src={User2} class="-mt-14 w-16" alt="userImg" />
                   <h2 class=" px-4 text-2xl text-darkBlue font-bold ">Chisom Theckla
                   </h2>
                   <p class="text-center text-sm text-grayishBlue md:text-center">“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel”</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className='swiperslide'>
               {/* <!--USER 3--> */}
               <div class=" flex flex-col items-center bg-gray-100 p-6 px-8 space-y-6">
                   <img src={User3} class="-mt-14 w-16" alt="userImg" />
                   <h2 class=" px-4 text-2xl text-darkBlue font-bold ">Jameson Cloft
                   </h2>
                   <p class="text-center text-grayishBlue text-sm md:text-center">“Their software allows us to track, manage and collaborate on our project from anywhere.”</p>
               </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <div class="container mx-auto flex flex-col items-center mt-10 md:justify-center">
       <a href="#" class="rounded-full bg-brightRed p-3 px-10  text-white font-semi-bold baseline" >Get Started</a>
    </div>     
    

</section>
    </div>
  )
}

export default Testimonials
