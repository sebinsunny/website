import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="boo-header">
            <div className="ui secondary pointing menu">
                <Link to="/">
                    <img src="BOOStudio_Logo.webp" />
                </Link>
                <Link to="/about" className="item">
                    ABOUT
                </Link>
                <Link to="/what-we-do" className="item">
                    WHAT WE DO
                </Link>
                <Link to="/contact-us" className="item">
                    CONTACT
                </Link>
                <Link to="/careers" className="item">
                    CAREER
                </Link>
                <button className="ui button right menu" onClick={() => window.open("https://boohub.com.au/", "_blank")}>BOOHUB ™</button>
            </div>
        </div>);
}

export default Header;
