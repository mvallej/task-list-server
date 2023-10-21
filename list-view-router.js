
const express = require('express');
const listViewRouter = express.Router();

const tasks = require('./tasks'); 
const { validateParameters } = require('./middlewares'); 


listViewRouter.get('/completed', (req, res) => {
  const completedTasks = tasks.filter((task) => task.isCompleted);
  res.json(completedTasks);
});


listViewRouter.get('/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);
  res.json(incompleteTasks);
});


listViewRouter.get('/task/:id', validateParameters, (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Tarea no encontrada');
  }
});



module.exports = listViewRouter;