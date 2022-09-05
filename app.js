const express = require('express');
const path = require('path');
const PORT = 3030;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})











app.get('/berners-lee', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/views/berners-lee'));
})

app.get('/clarke', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/views/berners-lee'));
})
