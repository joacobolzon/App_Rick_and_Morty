const saveApiData = require('../controllers/saveApiData.js');
const {sequelize} = require('../DB_connection.js');

const router = require('./index.js');
const express = require('express');
const PORT = 3001;
const cors = require('cors')

const server = express();


server.use(express.json())
server.use(cors())

server.use('/', router)


sequelize.sync({force:true}).then(async () => {
    await saveApiData()
    server.listen(PORT, () => {console.log('Server raised in port 3001')});
})

