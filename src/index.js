/*eslint-disable no-console*/
import express from 'express';

const port = 3001;
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
