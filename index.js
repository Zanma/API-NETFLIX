const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

//melihat
app.get("/my-movies", (req, res) => {
  res.json({ message: "List of movies" });
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
