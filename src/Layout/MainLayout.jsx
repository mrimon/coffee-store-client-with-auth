import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;