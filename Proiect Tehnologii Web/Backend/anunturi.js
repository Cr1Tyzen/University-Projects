import express from "express";
import mysql from "mysql2"; 
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "baza_de_date_fotbal"
});

db.connect((err) => {
  if (err) {
    console.error("Database conexiune failed:", err.stack);
    return;
  }
 
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hai noroi!");
});

app.get("/anunt", (req, res) => {
  const a = "SELECT * FROM anunturi";
  db.query(a, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/anunt", (req, res) => {
  const a = "INSERT INTO anunturi (`Link_articol`, `Desc`) VALUES (?)";
  const values = [req.body.Link_articol, req.body.Desc];
  db.query(a, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Anunt nou adaugat!");
  });
});
app.put("/anunt/:id", (req, res) => {
  const player_anuntID = req.params.id;
  const v = "UPDATE anunturi SET `Link_articol`= ?, `Desc`= ? WHERE id = ?";

  const values = [
    req.body.Link_articol,
    req.body.Desc
  ];

  db.query(v, [...values,player_anuntID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/anunt/:id", (req, res) => {
  const player_anuntID = req.params.id;
  const a = "DELETE FROM anunturi WHERE id=?";
  db.query(a, [player_anuntID], (err, data) => {
    if (err) return res.json(err);
    return res.json("Anuntul a fost sters cu succes!");
  });
});


app.listen(8803, () => {
  console.log("Conectat pe portul 8803.");
});
