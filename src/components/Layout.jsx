import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const Layout = ({ children }) => {
    return (
        <div id="container">
            <Header/>
            <Menu/>
                <div id="content">
                    { children }
                </div>
            <Footer/>
        </div>
    )
}

export default Layout
