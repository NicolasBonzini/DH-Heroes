const express = require('express');
const path = require('path');
const PORT = 3030;

const app = express();

app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/lovelace.html'));
});

app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/turing.html'));
})

app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})