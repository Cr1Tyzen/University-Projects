import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "./imagini/echipafotbal.jpg"
import img2 from "./imagini/echipabaschet.jpg"
import img3 from "./imagini/echipavolei.jpg"


function Galerie() {
    return (
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
            <div className="galerie">
                <img src={img1} alt="Echipa Fotbal" />
                <img src={img2} alt="Echipa Baschet" />
                <img src={img3} alt="Echipa Volei" />
            </div>
        </>
    );
}


export default Galerie;
