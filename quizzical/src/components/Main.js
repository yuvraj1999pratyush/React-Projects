import React from 'react';
import { Link } from 'react-router-dom';

export default function Main(props) {

    return (
        <div className='Main'>
            <h1>Quizzical</h1>
            <p>Unlocking knowledge at the speed of thought</p>


            <Link to={`/quiz`}>
                <button className='main-btn'>Start Quiz</button>
            </Link>

        </div>
    );
}