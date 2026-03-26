import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBaschet = () => {
  const [player_baschet, setPlayer_baschet] = useState({
    B_NumPrenum: "",
    B_varsta: ""
  });

  const navigate = useNavigate();

  const handleChange_baschet = (be) => {
    setPlayer_baschet((prev) => ({ ...prev, [be.target.name]: be.target.value }));
  };

  const handleClick_baschet = async (be) => {
    be.preventDefault();
    try {
      await axios.post("http://localhost:8801/baschet", player_baschet);
      navigate("/baschet");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App"> 
      <div className="form">
        <h1>Sign In</h1>
        <input
          type="text"
          placeholder="Nume Prenume"
          name="B_NumPrenum"
          onChange={handleChange_baschet}
          className="input"
        />
        <input
          type="password"
          placeholder="Parolă"
          name="B_varsta"
          onChange={handleChange_baschet}
          className="input"
        />
        <button onClick={handleClick_baschet} className="formButton"> Sign In </button>
      </div>
    </div>
    
  );
};

export default AddBaschet;
