const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 5000;

// for parsing application/json
app.use(bodyParser.json());

app.get('/data', (req, res) => {
  fs.readFile('data.json', function (err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    res.end();
  });
});

app.post('/data', function (req, res) {
  const json = JSON.stringify(req.body);
  fs.writeFile('data.json', json, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  res.send('Post Request');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));