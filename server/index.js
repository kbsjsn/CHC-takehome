const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/games', (req, res) => res.sendFile(path.resolve(__dirname, './games.json')));

app.use('*', (req, res) => {
  res.status(404).json(`Can't be found...`)
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));

