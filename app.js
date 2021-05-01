const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<h2>testing my first web app</h2></br><b>welcome to Omers pipline</b>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
