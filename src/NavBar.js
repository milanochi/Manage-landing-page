import React, { useState } from 'react';
import './App.css';

const NavBar = () => {
const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
const [menu_class, setMenuClass] = useState('menu hide')
const [isMenuClicked, setMenuClicked] = useState(false)

//Toggle burger menu change
const updateMenu = () =>{
    if(isMenuClicked){
        setBurgerClass('burger-bar clicked')
        setMenuClass('menu visible')
    }
    else{
        setBurgerClass('burger-bar unclicked')
        setMenuClass('menu hide')
    }
    setMenuClicked(!isMenuClicked)
}


  return (
    <div >
        <div className='burger-menu 'onClick={updateMenu}>
                <div className={burger_class} ></div>
                <div className={burger_class}></div>
                <div className={burger_class} ></div>
            </div>
            <div className={menu_class}>
                <div className='flex flex-col h-full items-center space-y-12 py-32'>
                <a href='#' className='text-white'>Pricing</a>
                <a href='#' className='text-white'>Products</a>
                <a href='#' className='text-white'>About Us</a>
                <a href='#' className='text-white'>Community</a>
                </div>
               
            </div>
            </div>
  )
}

export default NavBar