const saveApiData = require('../controllers/saveApiData.js');
const {sequelize} = require('../DB_connection.js');

const router = require('./index.js');
const express = require('express');
require('dotenv').config();
const { PORT } = process.env;
const cors = require('cors')

const server = express();


server.use(express.json())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use('/', router)


sequelize.sync({force:false}).then(async () => {
    await saveApiData()
    server.listen(PORT, () => {console.log('Server raised in port 3001')});
})

