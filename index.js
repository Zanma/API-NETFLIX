const express = require("express");
const app = express();
const port = 3000;
const { OK, ERR } = require('./utils/response')

app.use(express.json())

app.get("/", (req, res) => {
  const data = {
    isRunning: true,
    serverVersion: "1.0.0"
  }
  OK(res, 200, data, "server sedang berjalan di main route")
});

//melihat
app.get("/my-movies", (req, res) => {
  const data = {
    id: 1,
    title: "Hero hero",
    years: "2004"
  }
  OK(res, 200, data, "success getting my movies endpoint")
});

//membuat
app.post("/my-movies", (req, res) => {
  const data = req.body;
  console.log({ data });
  res.status(201).json({ message: "success" });
});

//menghapus
app.delete("/my-movies/:id/:token", (req, res) => {
  console.log("delete movies");
  const { id, token } = req.params;
  console.log({ id, token });
  res.status(204).json({ message: "success" });
});

//menambahkan data token
app.post("/token", (req, res) => {
  console.log("add token");
  const data = req.body;
  console.log({ data });
  res.status(201).json({ message: "token created..." });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
