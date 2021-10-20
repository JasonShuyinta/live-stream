const express = require("express");
const axios = require("axios");

const PORT = 8001;

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.post("/auth", function (req, res) {
  axios
    .post(`http://localhost:8000/history/checkStreamAuthorization`, {
      streamkey: req.body.key,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log("Axios Error", err));

  const streamkey = req.body.key;
  if (streamkey === "6145d2c7cbb6342005d532fb__ifkjckue:tk6vboql") {
    res.status(200).send();
    return;
  }

  res.status(403).send();
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
