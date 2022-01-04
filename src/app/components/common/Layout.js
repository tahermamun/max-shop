import React from 'react';
import TopNavbar from '../shared/navbar/TopNavbar'
import MainNavbar from '../shared/navbar/MainNavbar'
import Footer from '../shared/footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <TopNavbar />
            <MainNavbar />
            <main>
                <div className="main_container">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;