const express = require('express');
const listEditRouter = express.Router();

const tasks = require('./tasks'); 
const { validateTask } = require('./middlewares'); 


listEditRouter.post('/create', validateTask, (req, res) => {
  const newTask = req.body; 
  tasks.push(newTask);
  res.json(newTask);
});


listEditRouter.delete('/delete', (req, res) => {
  const taskId = req.body.id; 
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
    res.send('Tarea eliminada');
  } else {
    res.status(404).send('Tarea no encontrada');
  }
});


listEditRouter.put('/update', validateTask, (req, res) => {
  const taskId = req.body.id; 
  const updatedTask = req.body; 
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks[index] = updatedTask;
    res.json(updatedTask);
  } else {
    res.status(404).send('Tarea no encontrada');
  }
});

module.exports = listEditRouter;