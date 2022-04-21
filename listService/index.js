const express = require('express');
const app = express();
const cors = require('cors'); 
app.use(cors());
const axios = require('axios');



// required to handle the request body
app.use(express.json());

app.get('/lists', async(req, res) => {
    console.log('LOG: Recived get request');
    // Request all lists from DB and send request
    await axios.get('http://localhost:4001/lists')
    .then( (response) => {
        res.json(response.data);
        console.log(response.data);
    })
    .catch((err) => {
        res.status(500).send();
    })
    .then( () => {

    })
});


app.listen(4003, () => {
    console.log('Service Running on port 4003');
});