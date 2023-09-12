


const express = require('express');
const helmet = require('helmet');
const http = require('http');
const cors = require('cors');
const router = express.Router();

// run express server
const app = express();

// test mongodb connection
const db = require('./db');

// middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

// routes
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// create server
const server = http.createServer(app);

// listen to port
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));