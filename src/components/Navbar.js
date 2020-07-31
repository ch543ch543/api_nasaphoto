import React from 'react'; 
import { Link } from 'react-router-dom';

 const Navbar = () => {
     return(
       <div>
           <ul>
               <Link className='link' to = {process.env.PUBLIC_URL + '/'}>Take me Home</Link>
           </ul>
       </div>  
     )
 }

 export default Navbar;