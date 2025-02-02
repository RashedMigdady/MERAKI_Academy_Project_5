const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")
const connection = require("./db/db");

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
