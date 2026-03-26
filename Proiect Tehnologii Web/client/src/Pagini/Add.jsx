import axios from "axios";
import React from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Add = () => {
  const [player, setPlayer] = useState({
   NumPrenum:"",
   varsta:""
  });
 

  const navigate = useNavigate(); //hook react care permite navigarea programatica in cadrul aplicatiei

  const handleChange = (e) => { // (e) evenimetul declansat de schimbarea inputului
    setPlayer((prev) => ({ ...prev, [e.target.name]: e.target.value })); //actualizeaza starea player-ului,modifica doar proprietatea care 
                                                                          //  coresp cu e.target.name la noua valoare e.target.value
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/fotbal", player); //face cerere post la sv specificat si trimite datele "player"
      navigate("/fotbal");
    } catch (err) {
      console.log(err);
     
    }
  };

  return (
    <div className="form">
      <h1>Adauga Jucator</h1>
      <input
        type="text"
        placeholder="Nume Prenume"
        name="NumPrenum"
        onChange={handleChange}
      />
      
      <input
        type="number"
        placeholder="Varsta"
        name="varsta"
        onChange={handleChange}
      />
      
      <button onClick={handleClick}>Adauga Jucator</button>
      
    </div>
  );
};

export default Add;