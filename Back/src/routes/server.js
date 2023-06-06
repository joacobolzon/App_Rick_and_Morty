const saveApiData = require('../controllers/saveApiData.js');
const {sequelize} = require('../DB_connection.js');

const router = require('./index.js');
const express = require('express');
const PORT = 3001;
const cors = require('cors')

const server = express();


server.use(express.json())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://app-rick-and-morty-mocha.vercel.app/'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use('/', router)


sequelize.sync({force:true}).then(async () => {
    await saveApiData()
    server.listen(PORT, () => {console.log('Server raised in port 3001')});
})

