import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../components/CoffeeCard';
import { BsCupHot } from 'react-icons/bs';
import Banner from '../components/Banner';
import BannerCard from '../components/BannerCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees)
    return (
        <>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <div className='my-20 md:my-24 max-w-7xl mx-auto'>
                <div className='flex flex-col items-center'>
                    <p>--- Sip & Savor ---</p>
                    <h1 className='text-5xl md:text-6xl text-primary'>Our Popular Products</h1>
                    <div className=''>
                        <button className='flex items-center gap-1 rounded-sm text-white mb-8 md:mb-12 bg-secondary hover:bg-transparent hover:text-primary hover:border duration-1000 hover:border-primary mt-4 py-2 px-4'>Add Coffee <BsCupHot className='text-primary hover:text-secondary' /></button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                    {
                        coffees.map(coffee => <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        ></CoffeeCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;