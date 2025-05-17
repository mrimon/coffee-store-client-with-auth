import React from 'react';
import { NavLink } from 'react-router';
import navBg from '../assets/more/15.jpg';
import logo from '../assets/more/logo1.png'

const Header = () => {
    return (
        <div style={{
            backgroundImage: `url(${navBg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }} className='py-5 text-white flex gap-3 items-center justify-center '>
            <img className='w-16' src={logo} alt="" />
            <h1 className='text-4xl md:text-6xl'>Espresso Emporium</h1>
        </div>
    );
};

export default Header;