
import React, { /*useState*/ } from 'react'

import {Link} from "react-router-dom";


function Echipe()
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
    <div class="container_2">
        <h1>Echipa de fotbal</h1>
        <h2>Echipa de fotbal Gekados se bucură de un palmares impresionant, câștigând multiple titluri și trofee în competițiile locale și naționale.
             Cu jocul lor solid și abordarea echilibrată pe teren, au demonstrat consecvență și performanță constantă.</h2>
        <br></br>
        <h1>Echipa de baschet</h1>
        <h2>Echipa de baschet Gekados s-a evidențiat prin jocul lor spectaculos și victoriile remarcabile în competițiile importante. 
            Cu abilități tehnice și strategii bine puse la punct, au adus acasă numeroase trofee și recunoașteri.</h2>
        <br></br>
        <h1>Echipa de volei</h1>
        <h2>Echipa de volei Gekados a strălucit prin rezultate remarcabile, obținând numeroase victorii și trofee. 
            Cu o abordare echilibrată între tehnică și echipă, au reușit să se impună ca una dintre echipele de top în sportul voleiului,
             aducând onoare și recunoaștere clubului lor.</h2>
            
    </div>
        </>
        
    )

}

export default  Echipe
