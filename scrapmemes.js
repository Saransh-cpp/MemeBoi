const express = require("express");

const app = express();
const PORT = 3000;
ab = 1
app.get("/", (req, res) => {
    console.log("repeat")
    
  res.json({
    a: ab,
  });
  ab = 2
});

app.listen(PORT, () => {
  console.log("listening on port");
});
