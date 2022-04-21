const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const axios = require('axios');



// required to handle the request body
app.use(express.json());

app.get('/documents', async (req, res) => {
    console.log('LOG: Recived GET request for all documents');
    // Request all lists from DB and send request
    console.log('LOG: Sending request to databaseService')
    await axios.get('http://databaseservice:4001/documents')
        .then((response) => {
            res.json(response.data);
            console.log(response.data);
        })
        .catch((err) => {
            res.status(500).send();
        })
});


app.post('/document', async (req, res) => {
    console.log('LOG: Recived POST request for new document');
    console.log('LOG: Sending request to databaseService');
    await axios.post('http://databaseservice:4001/document', req.body)
        .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
})


app.listen(4002, () => {
    console.log('Service Running on port 4002');
});