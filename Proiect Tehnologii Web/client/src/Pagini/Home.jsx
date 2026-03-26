
import React, { /*useState*/ } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from "axios";
import {Link} from "react-router-dom";


function Home()
{
    return(
        <>
        <div className='navbar'>
       
        <button><Link to="/">Home </Link></button>
        <button><Link to="/fotbal"> Fotbal </Link></button>
        <button><Link to="/baschet">Baschet</Link></button>
        <button><Link to="/volei">Volei</Link></button>
        <button><Link to="/anunt">Anunturi</Link></button>
        <button><Link to="/contact" >Contact</Link></button>
        <button><Link to="/echipe">Echipe</Link></button>
        <button><Link to="/galerie">Galerie</Link></button>
    </div>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
        </style>
    <div class="container">
        <h1>Inaugurată în 2001, 
            Gekados Academy Craiova a format prima bază Rossoneri din România, 
            deschizându-și ușile pentru băieți cu vârste cuprinse între 7 și 20 de ani, 
            pentru a oferi un drum de înaltă calitate a creșterii sportive și personale, 
            prin procesul de antrenament F.C Gekados. , dezvoltat cu pasiune și studiu aprofundat 
            de-a lungul anilor.</h1>
            
    </div>
        </>
        
    )

}

export default  Home
