const express= require("express")

const app= express()

const tasks = [
    {
      id: '1',
      isCompleted: false,
      description: 'Practicar y repasar modulos Adda',
    },
    {
      id: '2',
      isCompleted: true,
      description: 'Realizar tareas y laboratorios',
    },
  ];
  
  app.get("/", (req, res) => {
    res.json(tasks);
  });
  
  app.listen(3000, () => {
    console.log("server listen on port",3000);
  });