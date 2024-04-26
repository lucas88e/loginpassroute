const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const middlewares = require('./middlewares');
const app = express();
const PORT = 4000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const dotenv = require('dotenv');
dotenv.config();


app.use(session({
    secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));

  
middlewares.setupAPP(app);
routes.setup(app);


app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
    res.send(`
      <h1>Ruta del Perfil</h1>
      <form method="post" action="/logout">
        <button type="submit">Log Out</button>
      </form>
    `);
  });

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
        console.error('Error al cerrar sesión:', err);
        }
        res.redirect('/');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });

  