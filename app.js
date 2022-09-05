const express = require('express');
const PORT = 3030;

const app = express();

app.get('/lovelace', (req, res) => {
    res.sendFile(__filename,);
});

app.get('/turing', (req, res) => {
    ;
})

app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})