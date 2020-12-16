import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';

import AboutUs from './bodyComponents/about';
import ContactUs from './bodyComponents/contactUs';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={MainBody} />
                    <Route path="/about" exact component={AboutUs} />
                    <Route path="/contact-us" exact component={ContactUs} />
                    <Footer />
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
