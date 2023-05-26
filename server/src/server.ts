import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
dotenv.config();

const port = process.env.PORT || 3000;
console.log(process.env.NODE_ENV);
console.log(process.env.MONGODB_URI);

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/error", (req, res) => {
  throw new Error("Secret error");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  if (process.env.NODE_ENV === "production") {
    res.status(500).send("Internal Server Error");
  } else {
    res.status(500).send(err.stack);
  }
});

app.listen(port, () => {
  console.log("Server running on port" + port);
});
