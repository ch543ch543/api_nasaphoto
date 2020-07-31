import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const apiKey = process.env.REACT_APP_NASA_KEY;
console.log(process.env.PUBLIC_URL);

const Nasaphoto = () => {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchphoto();  

        async function fetchphoto() {
            const resp = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + apiKey
            );
            const data = await resp.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);  //stop with empty array

    if(!photoData) return <div />;

    return(  
        <>
            <Navbar />
            <div className='nasa-photo'>
                { photoData.media_type === 'image'? (
                <img className ='nasa-photo img'
                src = {photoData.url}
                alt = {photoData.title} /> 
                ):(
                    <iframe
                        title = "space-video"
                        src = {photoData.url}
                        frameBorder = "0"
                        gesture = "media"
                        allow = "encrypted-media"
                        allowFullScreen
                        className = "photo"
                    />
                    )}

                <div>
                <h1 className ='h1'>{photoData.title}</h1>
                <p className ='date'>{photoData.date}</p>
                <p className ='explanation'>{photoData.explanation}</p>
                </div> 
            </div>
        </>    
    )
};

export default Nasaphoto; 

