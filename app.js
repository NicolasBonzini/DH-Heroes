const express = require('express');
const path = require('path');
const PORT = 3030;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

app.get("/babbage", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/babbage.html'));
})

