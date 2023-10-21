const tasks = [
    {
      id: '1',
      isCompleted: false,
      description: 'repaso',
    },
    {
      id: '2',
      isCompleted: true,
      description: 'realizar tareas más despacio',
    },
  ];
  
  
  exports.getAllTasks = (req, res) => {
    res.json(tasks);
  };
  
  
  exports.createTask = (req, res) => {
    const { description } = req.body;
    if (!description) {
      return res.status(400).json({ error: 'La descripción de la tarea es obligatoria' });
    }
  
    const newTask = {
      id: (tasks.length + 1).toString(),
      isCompleted: false,
      description,
    };
  
    tasks.push(newTask);
    res.status(201).json(newTask);
  };
  
  
  exports.updateTask = (req, res) => {
    const taskId = req.params.id;
    const { description, isCompleted } = req.body;
  
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (!taskToUpdate) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
  
    if (description) {
      taskToUpdate.description = description;
    }
  
    if (isCompleted !== undefined) {
      taskToUpdate.isCompleted = isCompleted;
    }
  
    res.json(taskToUpdate);
  };