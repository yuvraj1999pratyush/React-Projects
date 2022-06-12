import React from 'react';
import pic from '../images/React-icon.svg.png';

export default function Navbar() {
    return (
        <div >
            <nav className='header'>
                <div className='left'>
                    <img src={pic} />
                    <h1 className='heading'>ReactFacts</h1>
                </div>
                <div className='right'>
                <p className='project1'>React Course-Project 1</p>
                </div>   
            </nav>
        </div>
    );
}