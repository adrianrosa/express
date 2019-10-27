var express = require('express');
var app = express();
var service = require('./service');
const fetch = require('node-fetch');
var cors = require('cors');

app.get('/movies', (req, res) => {
   res.json(service.getMovies());
   /*fetch('http://rockefeller.local:8081/api/installments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',  
          'Authorization': 'Bearer Y2JkNjlkNTQ1YzcxNDhjYjQxMzhjNDJhMDBiODAxYzUxYTY2OTA0M2FiZmZlMTc3YzE1MTNhMDc0ODQwODFlZQ',
          'Accept': 'application/json'
        },
    })
    .then(resp => resp.json())
    .then(json => res.json(json));*/
});

app.use(cors());

app.listen(8001, () => {
   console.log('API listening on port 8001');
});
