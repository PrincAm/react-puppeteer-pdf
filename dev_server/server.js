const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const hn = require("../hn");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8080;

app.post("/pdf", (req, res) => {
  const puppeteerParams = req.body;
  hn.printPdf(puppeteerParams);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
