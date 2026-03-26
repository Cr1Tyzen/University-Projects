import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateAnunt = () => {
  const [player_anunt, setPlayer_anunt] = useState({
    Link_articol: "",
    Desc: ""
  });

  const location = useLocation();
  const navigate = useNavigate();
  const player_anuntId = location.pathname.split("/")[2];

  const handleChange_anunt = (ae) => {
    console.log(ae.target.name, ae.target.value); 
    setPlayer_anunt((prev) => ({ ...prev, [ae.target.name]: ae.target.value }));
  };

  const handleClick_anunt = async (ae) => {
    ae.preventDefault();
    console.log(player_anunt); 
    try {
      await axios.put(`http://localhost:8803/anunt/${player_anuntId}`, player_anunt);
      navigate("/anunt");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Modifica Anunt</h1>
      <input
        type="text"
        placeholder="Link-ul Articolului"
        onChange={handleChange_anunt}
        name="Link_articol"
      />
      <input
        type="text"
        placeholder="Descriere"
        onChange={handleChange_anunt}
        name="Desc"
      />
      <button onClick={handleClick_anunt}>Modifica Anunt</button>
    </div>
  );
};

export default UpdateAnunt;
