const express = require("express");
const cors = require("cors");
const os = require("os");
const app = express();
const color = "blue";
const hostname = os.hostname();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>The color is ${color} and host name is ${hostname}</h1>`);
});

app.get("/api", (req, res) => {
  const { format } = req.query;
  if (format === "json") {
    res.json({
      color,
      hostname,
    });
  } else {
    res.send(`<h1>Color name is ${color} and host ${hostname}</h1>`);
  }
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
