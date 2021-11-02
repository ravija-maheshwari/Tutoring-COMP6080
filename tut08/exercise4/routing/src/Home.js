import React from 'react';
import { Link } from  'react-router-dom';

function Home() {
    const generateRandomInt = () => {
        return (Math.floor(Math.random() * (100 - 1)));
    }

    return (
        <div>
            <h1> Random Post Navigator</h1>
            <Link to={`/post/${generateRandomInt()}`}> 
                Go to random post
            </Link>
        </div>
    )
}

export default Home;