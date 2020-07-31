import React from 'react';
import { Link } from 'react-router-dom';
 
const Home = () => {
    return(
        <div className='home'>
            <Link className='home-link' to = "/Nasaphoto">See into the stars!</Link> 
        </div>
    )
}   
 
export default Home;