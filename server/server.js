console.log("Server-side code running");

import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    credentials: true,
  })
); // allow requests from any origin to be accepted

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/data", (req, res) => {
  res.json({
    title: "Hello",
    message: "Hello from server.js",
  });
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
