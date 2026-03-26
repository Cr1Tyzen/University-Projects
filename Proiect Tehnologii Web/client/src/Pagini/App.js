
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fotbal from "./Fotbal";
import Add from "./Add";
import Update from "./Update";
import Baschet from "./Baschet";
import AddBaschet from "./AddBaschet";
import UpdateBaschet from "./UpdateBaschet";
import Home from "./Home";
import Volei from "./Volei";
import AddVolei from "./AddVolei";
import UpdateVolei from "./UpdateVolei";
import Anunt from "./Anunt";
import Contact from ".//Contact";
import UpdateAnunt from "./UpdateAnunt";
import AddAnunt from "./AddAnunt";
import Echipe from "./Echipe";
import Galerie from "./Galerie"
import "./style.css";


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fotbal" element={<Fotbal />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/baschet" element={<Baschet />} />
          <Route path="/add_baschet" element={<AddBaschet />} />
          <Route path="/update_baschet/:id" element={<UpdateBaschet />} />
          <Route path="/volei" element={<Volei />} />
          <Route path="/add_volei" element={<AddVolei />} />
          <Route path="/update_volei/:id" element={<UpdateVolei />} />
          <Route path="/anunt" element={<Anunt />} />
          <Route path="/add_anunt" element={<AddAnunt />} />
          <Route path="/update_anunt/:id" element={<UpdateAnunt />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/echipe" element={<Echipe/>}/>
          <Route path="/galerie" element={<Galerie/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

