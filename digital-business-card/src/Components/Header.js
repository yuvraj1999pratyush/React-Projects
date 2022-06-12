import React from 'react';
import pic from '../Images/linkedin.jpg';
import './Header.css';
import { FaLinkedin, FaMailBulk } from 'react-icons/fa';

export default function Header(){

    return (
        <div className="Header">
            <img src={pic} />

            <div className='title'>
                <h3>Pratyush Yuvraj</h3>
                <h5>Software Developer</h5>
                <p>pratyush yuvraj website</p>
            </div>

            <div className='btn'>
                <button className='email'><FaMailBulk /> Email</button>
                <button className='linkedin'><FaLinkedin /> Linkedin</button>
            </div>
        </div>
        
    );
}