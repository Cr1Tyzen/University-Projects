import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express(); // aplicatie Express, care este un cadru web pt nodejs care simplifica dezvolatarea serverelor web si API-urilor
app.use(cors()); // un mecanism care permite resurselor de pe un server sa fie solicitate de pe un alt domeniu decat cel de  
                 //  unde a fost incarcata resursa, permite solicitarile AJAX  de pe alte domenii
app.use(express.json()); //adauga un mecanism aplicatiei express, 
                         //analizeaza cererile http cu corpuri in format json si le pune la dispozitie in req.body

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "baza_de_date_fotbal",
});

app.get("/", (req, res) => {   
  res.json("saassa");
});

app.get("/volei", (req, res) => {
  const v = "SELECT * FROM volei";
  db.query(v, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/volei", (req, res) => {
  const v = "INSERT INTO volei (`V_NumPrenum`, `V_varsta`) VALUES (?)";

  const values = [
    req.body.V_NumPrenum,
    req.body.V_varsta
  ];

  db.query(v, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/volei/:id", (req, res) => {
  const player_voleiID = req.params.id;
  const v = " DELETE FROM volei WHERE id = ? ";

  db.query(v, [player_voleiID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/volei/:id", (req, res) => {
  const player_voleiID = req.params.id;
  const v = "UPDATE volei SET `V_NumPrenum`= ?, `V_varsta`= ? WHERE id = ?";

  const values = [
    req.body.V_NumPrenum,
    req.body.V_varsta
  ];

  db.query(v, [...values,player_voleiID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8802, () => {
  console.log("Conectat pe portul 8802.");
});