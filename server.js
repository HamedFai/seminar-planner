import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("OK");
});

app.get("/healthz", (_req, res) => {
  res.send("OK");
});

app.post("/api/save", (req, res) => {
  res.json({ success: true, received: req.body });
});

app.get("/api/load", (_req, res) => {
  res.json([]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
