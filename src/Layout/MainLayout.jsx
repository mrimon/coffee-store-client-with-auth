import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <footer className='bg-base-200'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;