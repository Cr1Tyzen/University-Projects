import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Anunt = () => {
  const [anunt, setAnunt] = useState([]);

  useEffect(() => {
    const fetchAllanunt = async () => {
      try {
        const res = await axios.get("http://localhost:8803/anunt");
        setAnunt(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllanunt();
  }, []);

  const handleDelete_anunt = async (id) => {
    try {
      await axios.delete(`http://localhost:8803/anunt/${id}`);
      window.location.reload();
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
      <h1>Anunturi</h1>
      <div className="jucatori">
        {anunt.map((player_anunt) => (
          <div key={player_anunt.id} className="player">
            <h2>{player_anunt.Desc}</h2>
            <p>
              <a href={player_anunt.Link_articol} target="_blank" rel="noopener noreferrer">
                {player_anunt.Desc}
              </a>
            </p>
            <button className="delete" onClick={() => handleDelete_anunt(player_anunt.id)}>Sterge</button>
            <button className="update">
              <Link to={`/update_anunt/${player_anunt.id}`}>Modifica</Link>
            </button>
          </div>
        ))}
      </div>
      <button className="addHome">
        <Link to="/add_anunt">Adauga anunt</Link>
      </button>
    </div>
    </>
  );
};

export default Anunt;