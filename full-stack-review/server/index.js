require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      { SERVER_PORT, CONNECTION_STRING } = process.env,
      cartCtrl = require('./cartController'),
      app = express();
    

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.get('/api/products', cartCtrl.getProducts);


const port = SERVER_PORT || 4040;
app.listen(port, () => console.log(`Memeing on ${port}`));