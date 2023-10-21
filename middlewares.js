
function validateTask(req, res, next) {
    const task = req.body;
  
    if (!task || typeof task !== 'object') {
      return res.status(400).json({ error: 'La solicitud debe contener un objeto de tarea válido.' });
    }
  
    if (!task.description || typeof task.description !== 'string') {
      return res.status(400).json({ error: 'La tarea debe tener una descripción válida.' });
    }
  
    if (typeof task.isCompleted !== 'boolean') {
      return res.status(400).json({ error: 'El campo "isCompleted" debe ser un valor booleano.' });
    }
  
    next();
  }
  
  function validateParameters(req, res, next) {
    if (!req.params.id) {
      return res.status(400).json({ error: 'Falta el parámetro "id" en la URL.' });
    }
  
    if (!/^\d+$/.test(req.params.id)) {
      return res.status(400).json({ error: 'El parámetro "id" debe ser un número válido.' });
    }
  
    next();
  }
  
  function validateRequestMethod(req, res, next) {
    if (req.method !== 'GET' && req.method !== 'POST' && req.method !== 'PUT' && req.method !== 'DELETE') {
      return res.status(400).json({ error: 'Método HTTP no válido.' });
    }
  
    next();
  }
  
  function validateParameters(req, res, next) {
    if (!req.params.id || !/^\d+$/.test(req.params.id)) {
      return res.status(400).json({ error: 'Parámetro "id" no válido en la URL.' });
    }
    next();
  }
  
  module.exports = { validateTask, validateParameters, validateRequestMethod };