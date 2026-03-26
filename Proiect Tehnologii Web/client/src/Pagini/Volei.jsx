import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Volei= () => {
  const [jucatori_volei, setJucatori_volei] = useState([]);

  useEffect(() => {
    const fetchAlljucatoriVolei = async () => {
      try {
        const res = await axios.get("http://localhost:8802/volei");
        setJucatori_volei(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAlljucatoriVolei();
  }, []);

  console.log(jucatori_volei);

  const handleDelete_volei = async (id) => {
    try {
      await axios.delete(`http://localhost:8802/volei/${id}`);
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
      <h1>Jucatori de volei</h1>
      <div className="jucatori">
        {jucatori_volei.map((player_volei) => (
          <div key={player_volei.id} className="player">
            
            <h2>{player_volei.V_NumPrenum}</h2>
            <p>{player_volei.V_varsta}</p>
            
            <button className="delete" onClick={() => handleDelete_volei(player_volei.id)}>Sterge</button>
            <button className="update">
              <Link
                to={`/update_volei/${player_volei.id}`} >
                Modifica
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add_volei" >
          Adauga jucator
        </Link>
      </button>
    </div>
    </>
  );
};

export default Volei;