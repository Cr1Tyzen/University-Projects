import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [player, setPlayer] = useState({
    NumPrenum:"",
    varsta:""
  });
  

  const location = useLocation(); // hook react router care permite accesarea locatiiei currente din aplicatie, inclusiv a info. despre url
  const navigate = useNavigate();

  const playerId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setPlayer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => { //gestioneaza trimiterea formularului
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/fotbal/${playerId}`, player); //trimite datele la sv ale player0ului
      navigate("/fotbal");
    } catch (err) {
      console.log(err);
      
    }
  };

  return (
    <div className="form">
      <h1>Modifica Jucator</h1>
      <input type="text" placeholder='Numele si Prenumele' onChange={handleChange} name="NumPrenum" value={player.NumPrenum}/>
      
      <input type="number" placeholder="varsta" onChange={handleChange} name="varsta" value={player.varsta}/>
      
      <button onClick={handleClick}>Modifica</button>
      
     
    </div>
  );
};

export default Update;