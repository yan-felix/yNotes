const express = require('express');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const route = require('./routes')
const server = express();
const port = 3333;

require('./database/config')

server.use(session({secret: 'YCFandeixisekeidoapp'}));

server.use(express.json());

server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}));

server.use(cors());

server.use(route)

server.listen(port, () => {
    console.log('Servidor rodando na porta 3333...')
})