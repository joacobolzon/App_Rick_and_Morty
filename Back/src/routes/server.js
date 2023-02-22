const router = require('./index.js')
const express = require('express');
const server = express();
const PORT = 3001;
const cors = require('cors')

server.use(express.json())
server.use(cors())

server.use('/', router)

server.listen(PORT, () => console.log('Server raised in port 3001'));

