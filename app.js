const express = require('express');
const app = express();
const port = 3000;

const { validateRequestMethod } = require('./middlewares'); 


const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use(express.json());


app.use((req, res, next) => {
  validateRequestMethod(req, res, next);
});


app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);


app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});