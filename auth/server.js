const express = require("express");
const app = express();

const PORT = 8001;
app.use(express.urlencoded());

app.post("/auth", function (req, res) {
  const streamkey = req.body.key;

  if (streamkey === "supersecret") {
    res.status(200).send();
    return;
  }

  res.status(403).send();
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
