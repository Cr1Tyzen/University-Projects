import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Fotbal = () => {                      //initializare lista goala ([])
  const [jucatori, setJucatori] = useState([]); //useState este un hook React permite gestionarea ,starii in componentele functionale
                                                // jcuatori,setJucatori definesc o starre numita jucatori si o fct pt a actualiza aceasta
  useEffect(() => {
    const fetchAlljucatori = async () => { //face cerere tip GET la http.../fotbal ,cerere asincrona
      try {
        const res = await axios.get("http://localhost:8800/fotbal");
        setJucatori(res.data); //actualizeaza jucatorii cu datele obt.
      } catch (err) {
        console.log(err);
      }
    };
    fetchAlljucatori();
  }, []);

  console.log(jucatori); //afis jucatorii

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/fotbal/${id}`); //cerere pt stergere bazata pe id 
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

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
    <div>
      <h1>Jucatori de fotbal</h1>
      <div className="jucatori">
        {jucatori.map((player) => (
          <div key={player.id} className="player">
            
            <h2>{player.NumPrenum}</h2>
            <p>{player.varsta}</p>
            
            <button className="delete" onClick={() => handleDelete(player.id)}>Sterge</button>
            <button className="update">
              <Link
                to={`/update/${player.id}`} >
                Modifica
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button >
        <Link to="/add" >
          Adauga jucator
        </Link>
      </button>
    </div>
    </>
  );
};

export default Fotbal;