import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const {Photo, name, quantity, supplier, taste, price, details} = coffee;
    return (
        <div>
            <div className=' my-8 md:my-12'>
                
                <Link to='/' className='flex items-center gap-3 text-2xl md:text-3xl text-accent'><FaArrowLeftLong size={26} />Back to home</Link>
            </div>
            <div className='flex flex-col md:flex-row items-center  md:px-[172px] md:gap-28  bg-base-200 py-12 md:py-16 '>
                <div>
                    <img className='w-[350px] h-[450px]' src={Photo} alt="" />
                </div>
                <div>
                    <h1 className='text-primary text-3xl md:text-4xl mb-8'>Niceties</h1>
                    <p><span className='text-base-300 font-semibold pr-2'>Name: </span>{name}</p>
                    <p><span className='text-base-300 font-semibold pr-2'>Taste: </span>{taste}</p>
                    <p><span className='text-base-300 font-semibold pr-2'>Supplier: </span>{supplier}</p>
                    <p><span className='text-base-300 font-semibold pr-2'>Details: </span>{details}</p>
                    <p><span className='text-base-300 font-semibold pr-2'>Quantity: </span>{quantity}</p>
                    <p><span className='text-base-300 font-semibold pr-2'>Price: </span>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;