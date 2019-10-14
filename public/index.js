const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send(__dirname + '/index.html');
});

app.post('/leads', (req, res) => {
    res.send('ok');
});

app.listem(3000);