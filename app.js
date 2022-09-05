const express = require('express');
const path = require('path');
const PORT = 3030;

const app = express();

app.get('/hamilton', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/hamilton.html'))
})

app.get('/hopper', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/hopper.html'))
})

app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})