const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const { Pool, Client } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'home_app',
    password: 'postgres',
    port: 5432,
  })




const cors = require('cors');
app.use(cors());
// required to handle the request body
app.use(express.json());

const axios = require('axios');


const lists = [];
const digitalDocuments = [];






app.get('/lists', (req, res) => {
    pool.query('SELECT * FROM home_list;', (err, dbRes) => {
        res.json(dbRes.rows);
    });
});




app.get('/documents', async (req, res) => {
    pool.query('SELECT * FROM documents;', (err, dbRes) => {
        res.json(dbRes.rows);
    });
});


app.post('/document', (req, res) => {
    try{
        pool.query(`INSERT INTO documents (titel, path) VALUES('${req.body.title.toString()}', '${req.body.path.toString()}');`, (err, dbRes) => {
            if(err) {
                res.status(500).send(err);
            }else {
                res.status(201).send();
            }
        });
    }catch (err) {
        console.log(err);
    }

});

app.post('/list', (req, res) => {
    try{
        pool.query(`INSERT INTO home_list (name) VALUES('${req.body.name.toString()}');`, (err, dbRes) => {
            if(err) {
                res.status(500).send(err);
            }else {
                res.status(201).send();
            }
        });
    }catch (err) {
        console.log(err);
    }
});

app.listen(4001, () => {
    console.log('Service Running on port 4001');
});