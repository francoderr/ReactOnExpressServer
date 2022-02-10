const express = require('express');
const app = express();

const port = 3001;

app.get('/express_backend', (req, res) => {
    res.send({express: 'backend is connected to react'});
});

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
});