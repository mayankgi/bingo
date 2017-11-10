const express = require('express');
const app = express();
const createSocketConnection = require('./server/socketHandler')

const PORT = 3000;

app.use(express.static('public'))

const server = app.listen(PORT, _ => console.log(`App running on port ${PORT}.`))
createSocketConnection(server);
