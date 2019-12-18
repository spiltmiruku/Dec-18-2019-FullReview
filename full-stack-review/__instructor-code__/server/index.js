require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());

const port = SERVER_PORT || 4040;
app.listen(port, () => console.log(`Memeing on ${port}`));