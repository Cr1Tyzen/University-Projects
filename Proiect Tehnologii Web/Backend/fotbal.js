import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "baza_de_date_fotbal",
});

app.get("/", (req, res) => {
  res.json("saassa");
});

app.get("/fotbal", (req, res) => {
  const q = "SELECT * FROM fotbal";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/fotbal", (req, res) => {
  const q = "INSERT INTO fotbal(`NumPrenum`, `varsta`) VALUES (?)";

  const values = [
    req.body.NumPrenum,
    req.body.varsta
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/fotbal/:id", (req, res) => {
  const playerID = req.params.id;
  const q = " DELETE FROM fotbal WHERE id = ? ";

  db.query(q, [playerID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/fotbal/:id", (req, res) => {
  const playerID = req.params.id;
  const q = "UPDATE fotbal SET `NumPrenum`= ?, `varsta`= ? WHERE id = ?";

  const values = [
    req.body.NumPrenum,
    req.body.varsta
  ];

  db.query(q, [...values,playerID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Conectat pe portul 8800.");
});