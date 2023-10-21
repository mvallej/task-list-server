const express = require('express');
const listViewRouter = express.Router();

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

listViewRouter.get('/completed', (req, res) => {
  const completedTasks = tasks.filter((task) => task.isCompleted);
  res.json(completedTasks);
});

listViewRouter.get('/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);
  res.json(incompleteTasks);
});

module.exports = listViewRouter;