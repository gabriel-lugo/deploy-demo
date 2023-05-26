import dotenv from "dotenv";
import express from "express";
dotenv.config();

const port = process.env.PORT || 3000;
console.log(process.env.NODE_ENV);
console.log(process.env.MONGODB_URI);

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
