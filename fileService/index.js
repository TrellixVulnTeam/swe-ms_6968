const express = require('express');
const app = express();
const cors = require('cors'); 
app.use(cors());
const axios = require('axios');
app.use(express.json());



app.post('/image', (req, res) => {
    if(req.body.name){
        res.send(`https://fileshare.microservice.com/assets/images/${req.body.name}`);
    }else{
        res.status(400).send('Please provide a valid filename');
    }
});


app.listen(4003, () => {
    console.log('Fileservice Running on port 4003');
});