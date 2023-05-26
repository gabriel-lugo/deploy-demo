import express from "express";

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server" });
});

app.listen(port, () => {
  console.log("Server running on port" + port);
});
