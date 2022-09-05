const express = require('express');
const path = require('path');
const PORT = 3030;

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

app.get('/berners-lee', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/views/berners-lee'));
})

app.get('/clarke', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/views/berners-lee'));
})

app.get("/babbage", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/babbage.html'));
})

app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})


