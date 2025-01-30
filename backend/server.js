const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend fonctionne !");
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
