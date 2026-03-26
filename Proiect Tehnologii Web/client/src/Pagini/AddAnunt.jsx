import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAnunt = () => {
  const [player_anunt, setPlayer_anunt] = useState({
    Link_articol: "",
    Desc: ""
  });

  const navigate = useNavigate();

  const handleChange_anunt = (ae) => {
    console.log(ae.target.name, ae.target.value); 
    setPlayer_anunt((prev) => ({ ...prev, [ae.target.name]: ae.target.value }));
  };

  const handleClick_anunt = async (ae) => {
    ae.preventDefault();
    console.log(player_anunt); 
    try {
      await axios.post("http://localhost:8803/anunt", player_anunt);
      navigate("/anunt");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Adauga Anunt</h1>
      <input
        type="text"
        placeholder="Link Anunt"
        name="Link_articol"
        onChange={handleChange_anunt}
      />
      <input
        type="text"
        placeholder="Descriere"
        name="Desc"
        onChange={handleChange_anunt}
      />
      <button onClick={handleClick_anunt}>Adauga Anunt</button>
    </div>
  );
};

export default AddAnunt;
