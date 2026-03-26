import axios from "axios";
import React from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const AddVolei= () => {
  const [player_volei, setPlayer_volei] = useState({
   V_NumPrenum:"",
   V_varsta:""
  });
 

  const navigate = useNavigate();

  const handleChange_volei = (ve) => {
    setPlayer_volei((prev) => ({ ...prev, [ve.target.name]: ve.target.value }));
  };

  const handleClick_volei = async (ve) => {
    ve.preventDefault();
    try {
      await axios.post("http://localhost:8802/volei", player_volei);
      navigate("/volei");
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
        name="V_NumPrenum"
        onChange={handleChange_volei}
      />
      
      <input
        type="number"
        placeholder="Varsta"
        name="V_varsta"
        onChange={handleChange_volei}
      />
      
      <button onClick={handleClick_volei}>Adauga Jucator</button>
      
    </div>
  );
};

export default AddVolei;