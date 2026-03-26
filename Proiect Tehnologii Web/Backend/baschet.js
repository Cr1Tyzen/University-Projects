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

app.get("/baschet", (req, res) => {
  const b = "SELECT * FROM baschet";
  db.query(b, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/baschet", (req, res) => {
  const b = "INSERT INTO baschet (`B_NumPrenum`, `B_varsta`) VALUES (?)";

  const values = [
    req.body.B_NumPrenum,
    req.body.B_varsta
  ];

  db.query(b, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/baschet/:id", (req, res) => {
  const player_baschetID = req.params.id;
  const b = " DELETE FROM baschet WHERE id = ? ";

  db.query(b, [player_baschetID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/baschet/:id", (req, res) => {
  const player_baschetID = req.params.id;
  const b = "UPDATE baschet SET `B_NumPrenum`= ?, `B_varsta`= ? WHERE id = ?";

  const values = [
    req.body.B_NumPrenum,
    req.body.B_varsta
  ];

  db.query(b, [...values,player_baschetID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8801, () => {
  console.log("Conectat pe portul 8801.");
});