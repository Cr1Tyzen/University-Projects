import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateVolei = () => {
  const [player_volei, setPlayer_volei] = useState({
    V_NumPrenum:"",
    V_varsta:""
  });
  

  const location = useLocation();
  const navigate = useNavigate();

  const player_voleiId = location.pathname.split("/")[2];

  const handleChange_volei = (ve) => {
    setPlayer_volei((prev) => ({ ...prev, [ve.target.name]: ve.target.value }));
  };

  const handleClick_volei = async (ve) => {
    ve.preventDefault();

    try {
      await axios.put(`http://localhost:8802/volei/${player_voleiId}`, player_volei);
      navigate("/volei");
    } catch (err) {
      console.log(err);
      
    }
  };

  return (
    <div className="form">
      <h1>Modifica Jucator</h1>
      <input type="text" placeholder='Numele si Prenumele' onChange={handleChange_volei} name="V_NumPrenum" value={player_volei.V_NumPrenum}/>
      
      <input type="number" placeholder="varsta" onChange={handleChange_volei} name="V_varsta" value={player_volei.V_varsta}/>
      
      <button onClick={handleClick_volei}>Modifica</button>
      
     
    </div>
  );
};

export default UpdateVolei;