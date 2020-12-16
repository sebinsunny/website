import React from 'react';
import ReactPlayer from 'react-player';

const MainBody = () => {
    return (<div class="ui segment">
        <div className="boo-home-seg-1">
            <h1>WELCOME TO BOOSTUDIO!<br /> YOUR BRAND ACTIVATION PARTNER</h1>
            <span>Helping you deliver unique, impactful brand experiences in retail, design, events, & technology.</span>
        </div>
        <div className="boo-home-seg-2 ui internally celled grid">
            <div className="row">
                <div className="eight wide middle aligned column">
                    <h3>Design</h3>
                    <p>Our team will help you discover your ‘Brand Attraction' through creative design.</p>
                </div>
                <div className="eight wide column">
                    <h3>Installation</h3>
                    <p>Expert break-fix, installation, and retail solutions to ensure your displays, storefronts and products are ready to meet your customers.</p>
                </div>
            </div>
            <div className="row">
                <div className="eight wide column">
                    <h3>Production</h3>
                    <p>We like to get great sh*t done. And quickly.  Through creative design, graphics, expert carpentry and fabrication we produce exciting brand experiences.</p>
                </div>
                <div className="eight wide column">
                    <h3>Activation & Events</h3>
                    <p>Creating unique activations and events that capture attention, make lasting memories and drive genuine impact.</p>
                </div>
            </div>
        </div>
    </div>);
}
{/* <ReactPlayer url='https://video.wixstatic.com/video/44e661_3b0dd98fd8174edcaf41bb8fa9e52d26/360p/mp4/file.mp4' playing={true} muted={true} width='100%' height='100%'/> */}

export default MainBody;
