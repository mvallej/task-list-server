require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const users = [
  {
    username: 'usuario1',
    password: 'password1',
  },
  {
    username: 'usuario2',
    password: 'password2',
  },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  
  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Credenciales incorrectas' });
  }

 
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '1h', 
  });

  res.json({ token });
});


app.get('/protegido', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    res.json({ message: 'Ruta protegida', user: decoded.username });
  });
});

app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});



