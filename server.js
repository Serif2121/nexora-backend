const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ANA SAYFA
app.get("/", (req, res) => {
  res.send("NEXORA API RUNNING 🚀");
});

// FEED
app.get("/feed", (req, res) => {
  res.json([
    { id: 1, text: "NEXORA çalışıyor 🚀" },
    { id: 2, text: "İlk post geldi" },
    { id: 3, text: "Backend + Frontend bağlı 🔥" }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});