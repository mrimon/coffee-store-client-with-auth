import React from 'react';
import hotCup from '../assets/icons/1.png';
import badge from '../assets/icons/2.png';
import coffee from '../assets/icons/3.png';
import Cup from '../assets/icons/4.png';



const BannerCard = () => {
    return (
        <div className=' bg-base-200 py-12'>
            <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 justify-between gap-8'>
                <div className="max-w-[300px]">
                    <figure>
                        <img
                            src={hotCup}
                            alt="Shoes" />
                    </figure>
                    <div className="mt-4">
                        <h2 className="card-title text-primary">
                            Awesome Aroma
                        </h2>
                        <p className='text-accent'>You will definitely be a fan of the design <br />& aroma of your coffee</p>
                    </div>
                </div>
                <div className="max-w-[300px]">
                    <figure>
                        <img
                            src={badge}
                            alt="Shoes" />
                    </figure>
                    <div className="mt-4">
                        <h2 className="card-title text-primary">
                            High Quality
                        </h2>
                        <p className='text-accent'>We served the coffee to you maintaining <br /> the best quality</p>
                    </div>
                </div>
                <div className="max-w-[300px]">
                    <figure>
                        <img
                            src={coffee}
                            alt="Shoes" />
                    </figure>
                    <div className="mt-4">
                        <h2 className="card-title text-primary">
                            Pure Grades
                        </h2>
                        <p className='text-accent'>The coffee is made of the green coffee <br /> beans which you will love</p>
                    </div>
                </div>
                <div className="max-w-[300px]">
                    <figure>
                        <img
                            src={Cup}
                            alt="Shoes" />
                    </figure>
                    <div className="mt-4">
                        <h2 className="card-title text-primary">
                            Proper Roasting
                        </h2>
                        <p className='text-accent'>Your coffee is brewed by first roasting <br /> the green coffee beans</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BannerCard;