const express= require("express")

const app= express()

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use(express.json());


app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);


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
  
  app.get("/", (req, res) => {
    res.json(tasks);
  });
  
  app.listen(3000, () => {
    console.log("server listen on port",3000);
  });