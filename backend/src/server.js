const express = require('express');
const cors = require('cors');
let database = require('./database');

const app = express();
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello, World');
});

app.get('/students/list', function (req, res) {
  setTimeout(function () {
    res.send(database);
  }, 2000);
});

app.get('/students/find/:ra', function (req, res) {
  const studentFound = database.find(function (student) {
    return student.ra == req.params.ra;
  });
  setTimeout(function () {
    res.send(studentFound);
  }, 2000);
});

app.delete('/students/delete/:ra', (req, res) => {
  database = database.filter((student) => {
    return student.ra != req.params.ra;
  });
  res.send({
    result: true,
    message: `O estudante #${req.params.ra} foi excluído com sucesso`,
  });
});

app.listen(3000);
console.log('Server is running...');
