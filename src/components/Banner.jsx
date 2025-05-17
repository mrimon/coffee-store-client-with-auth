import React from 'react';
import bannerBg from '../assets/more/bannerBg.png'

const Banner = () => {
    return (
        <div style={{
                backgroundImage: `url(${bannerBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            <div  className="max-w-7xl mx-auto hero flex justify-center md:justify-end  text-white min-h-screen">

                <div className=''>
                    <h1 className="text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="py-6">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <button className='flex items-center gap-1 rounded-sm text-primary mb-8 md:mb-12 bg-secondary hover:bg-transparent hover:text-white hover:border duration-1000 hover:border-white mt-4 py-2 px-4'>Learn more</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;