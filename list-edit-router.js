const express = require('express');
const listEditRouter = express.Router();

const tasks = [
    {
        id: '1',
        isCompleted: false,
        description: 'repaso',
      },
      {
        id: '2',
        isCompleted: true,
        description: 'Realizar laboratorios',
      },
];


listEditRouter.post('/create', (req, res) => {
  const newTask = req.body; 
  tasks.push(newTask);
  res.json(newTask);
});


listEditRouter.delete('/delete/:id', (req, res) => {
  const taskId = req.params.id;
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
    res.send('Tarea eliminada');
  } else {
    res.status(404).send('Tarea no encontrada');
  }
});


listEditRouter.put('/update/:id', (req, res) => {
  const taskId = req.params.id;
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