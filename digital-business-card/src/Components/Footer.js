import React from 'react';
import { FaTwitter, FaFacebook ,FaInstagram ,FaGithub } from 'react-icons/fa';

import './Footer.css';

export default function Footer(){

    return(
        <div className='Footer'>
            <ul className='logo'>
                <li><FaTwitter /></li>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaGithub /></li>
            </ul>
        </div>
    );
}