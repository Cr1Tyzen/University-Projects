import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateBaschet = () => {
  const [player_baschet, setPlayer_baschet] = useState({
    B_NumPrenum:"",
    B_varsta:""
  });
  

  const location = useLocation();
  const navigate = useNavigate();

  const player_baschetId = location.pathname.split("/")[2];

  const handleChange_baschet = (be) => {
    setPlayer_baschet((prev) => ({ ...prev, [be.target.name]: be.target.value }));
  };

  const handleClick_baschet = async (be) => {
    be.preventDefault();

    try {
      await axios.put(`http://localhost:8801/baschet/${player_baschetId}`, player_baschet);
      navigate("/baschet");
    } catch (err) {
      console.log(err);
      
    }
  };

  return (
    <div className="form">
      <h1>Modifica Jucator</h1>
      <input type="text" placeholder='Numele si Prenumele' onChange={handleChange_baschet} name="B_NumPrenum" value={player_baschet.B_NumPrenum}/>
      
      <input type="number" placeholder="varsta" onChange={handleChange_baschet} name="B_varsta" value={player_baschet.B_varsta}/>
      
      <button onClick={handleClick_baschet}>Modifica</button>
      
     
    </div>
  );
};

export default UpdateBaschet;