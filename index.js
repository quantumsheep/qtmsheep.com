const express = require('express');
const path = require('path');

const app = express();

app.use('/assets', express.static(path.resolve('assets')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.listen(3000, () => console.log('Server launched on http://localhost:3000!'));