import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
const footerItems = [
    { text: "Activations", link: "/activations" },
    { text: "Design", link: "/design" },
    { text: "Events", link: "/events" },
    { text: "Production", link: "/production" },
    { text: "Technology", link: "/technology" }
];

const socialLinks = {
    fb: "https://www.facebook.com/BOOStudio.com.au/",
    ig: "https://www.instagram.com/boostudio.com.au/?hl=en",
    li: "https://www.linkedin.com/company/boostudio/"
}
const Footer = () => {
    const footerLinks = _.map(footerItems, (item) => {
        return <li><Link to={item.link}>{item.text}</Link></li>;
    })
    return (
        <div className="ui inverted vertical footer segment">
            <div className="ui container">
                <div className="ui stackable inverted divided equal height stackable grid">
                    <div className="four wide middle aligned column">
                        <h3>AUSTRALIA</h3>
                        <h3>NEW ZEALAND</h3>
                    </div>
                    <div className="three wide middle aligned column">
                        <ul>
                            {footerLinks}
                        </ul>
                    </div>
                    <div className="three wide middle aligned column right floated">
                        <ul>
                            <li><Link to="/">Pay an invoice</Link></li>
                            <li><Link to="/">Use of Cookies</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="four wide middle aligned column right floated">
                        <img src="BOOStudio_Logo.webp" />
                        <div className="boo-footer-address">
                            101-103 Illawarra Road, <br />
                                Marrickville, NSW 2204, <br />
                                Sydney, Australia.
                            </div>
                        <div className="boo-social ui container">
                            <div className="ui grid">
                                <a className="column" href={socialLinks.fb} target="_blank" rel="noreferrer"><FacebookOutlined style={{ fontSize: '18px' }} /></a>
                                <a className="column" href={socialLinks.ig} target="_blank" rel="noreferrer"><InstagramOutlined style={{ fontSize: '18px' }} /></a>
                                <a className="column" href={socialLinks.in} target="_blank" rel="noreferrer"><LinkedinOutlined style={{ fontSize: '18px' }} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
