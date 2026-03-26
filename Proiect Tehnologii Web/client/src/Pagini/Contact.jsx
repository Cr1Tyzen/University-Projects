import React, { /*useState*/ } from 'react'

import {Link} from "react-router-dom";


function Contact(){

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
        <div class="container_2">
        <h1>Contact</h1>
        <h2>Telefon</h2>
        <h3> 0724.934.657</h3>
           <h3>0767.652.335</h3>
           <h3> 0738.344.133</h3>
           <h3> 0723.235.785</h3>
        <h2>Fix</h2>
            <h3>0238.321.196</h3>
            <h3>0236.456.895</h3>
            <h3>0316.493.700</h3>
            <h2>E-mail</h2>
            <h3>hoyoma8891@facais.com</h3>
            <h3>jebeded329@mfyax.com</h3>

            </div>

    </>

    )
}
export default Contact;
