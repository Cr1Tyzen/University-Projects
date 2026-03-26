import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Baschet = () => {
  const [jucatori_baschet, setJucatori_baschet] = useState([]);

  useEffect(() => {
    const fetchAlljucatoriBaschet = async () => {
      try {
        const res = await axios.get("http://localhost:8801/baschet");
        setJucatori_baschet(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAlljucatoriBaschet();
  }, []);

  console.log(jucatori_baschet);

  const handleDelete_baschet = async (id) => {
    try {
      await axios.delete(`http://localhost:8801/baschet/${id}`);
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
      <h1>Jucatori de baschet</h1>
      <div className="jucatori">
        {jucatori_baschet.map((player_baschet) => (
          <div key={player_baschet.id} className="player">
            
            <h2>{player_baschet.B_NumPrenum}</h2>
            <p>{player_baschet.B_varsta}</p>
            
            <button className="delete" onClick={() => handleDelete_baschet(player_baschet.id)}>Sterge</button>
            <button className="update">
              <Link
                to={`/update_baschet/${player_baschet.id}`} >
                Modifica
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add_baschet" >
          Adauga jucator
        </Link>
      </button>
    </div>
    </>
  );
};

export default Baschet;