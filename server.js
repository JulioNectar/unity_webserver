//create a server that listens on port 3000 that render index.html
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
}
);

app.listen(PORT, () => {
    console.log('listening on port ${PORT}');
});