import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at $199">
                    <Link to="/rooms" className="btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            
        </div>
    )
}

export default Home;
