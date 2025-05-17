import React from 'react';
import logo from '../assets/more/logo1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { FaLocationPin, FaMessage } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className=' flex flex-col md:flex-row max-w-7xl pt-24 pb-10 mx-auto justify-between items-center'>
            <div>
                <img className='w-16' src={logo} alt="" />
                <h1 className='text-primary text-4xl md:text-5xl'>Espresso Emporium</h1>
                <p className='my-8'>Always ready to be your friend. Come & Contact with us to share your <br />memorable moments, to share with your best companion.</p>
                <div className="join join-vertical text-primary space-x-3 lg:join-horizontal">
                    <button className=" join-item"><FaFacebook size={35}/>
                    </button>
                    <button className=" join-item"><FaTwitter size={35}/>
                    </button>
                    <button className=" join-item "><FaInstagram size={35}/></button>
                    <button className=" join-item "><FaLinkedin size={35}/></button>
                </div>
            </div>
            <div>
                <h1 className='text-primary text-4xl md:text-5xl pb-8'>Connect with Us</h1>
                <form className='space-y-4'>
                    <input className='bg-white w-96 py-2 px-3 rounded-xl focus:outline-primary' type="text" name="name" id="name" placeholder='Name' />
                    <br />
                    <input className='bg-white w-96 py-2 px-3 rounded-xl focus:outline-primary' type="email" name="email" id="email" placeholder='Email' />
                    <br />
                    <textarea className='bg-white w-96 py-2 px-3 rounded-xl focus:outline-primary resize-none' name="textArea" id="textArea" cols="10" rows="4" placeholder='Your Message'></textarea>
                    <br />
                    <button className='py-2 px-5 text-2xl text-primary rounded-2xl border-2 hover:text-white hover:bg-primary'>Send message</button>
                </form>
            </div>
            <div>
                <h1 className=' mb-8 text-primary text-4xl md:text-5xl'>Get in Touch</h1>
                <p className='flex items-center gap-2'><FaPhone className='text-primary'/><span>+88 018231343</span></p>
                <p className='flex items-center gap-2'><IoMail className='text-primary'/><span>info@gmail.com</span></p>
                <p className='flex items-center gap-2'><FaLocationPin className='text-primary'/><span>72, Wall street, King Road, Dhaka</span></p>
            </div>
        </div>
    );
};

export default Footer;