// Snippets de código para poder componer el programa

//Usado?: YES
  const middlewares = require('./middlewares');
//--- Explicación:  en la variable middlewares cargamos el fichero middlewares 

// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación: en la variable bodyParse importamos el modulo body-parser

// -------------------------------------------------------------------------------------

//Usado?:  YES
const session = require('express-session');
//--- Explicación: en la variable session importamos el modulo express-session

// -------------------------------------------------------------------------------------

//Usado?: YES
const express = require('express');
//--- Explicación: Se utiliza para importar o cargar el modulo express 

// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación: en la variable bodyParse importamos el modulo body-parser

// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación: en la variable session importamos el modulo express-session

// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación: importamos en la variable dotenv el módulo dotenv

// -------------------------------------------------------------------------------------

//Usado?: 
const middlewares = require('./middlewares');
//--- Explicación: en la variable middlewares cargamos el fichero middlewares 

// -------------------------------------------------------------------------------------

//Usado?: YES
const routes = require('./routes');
//--- Explicación: Importar el módulo routes

// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación: Se utiliza para cargar variables del entorno desde el archivo .env

// -------------------------------------------------------------------------------------

//Usado?: YES
const app = express();
//--- Explicación: Crea una variable para ejecutar el modulo express

// -------------------------------------------------------------------------------------

//Usado?: YES
const PORT = 4000;
//--- Explicación: Asigna  una variable llamada PORT un numero del valor 4000

// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación: importamos en la variable dotenv el módulo dotenv

// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación:  Se utiliza para cargar variables del entorno desde el archivo .env
// -------------------------------------------------------------------------------------

//Usado?: YES
middlewares.setupApp(app);
//--- Explicación: Habia un error en la llamada a la función por estar mal escrito era APP

// -------------------------------------------------------------------------------------

//Usado?: YES
routes.setup(app);
//--- Explicación: la instancia de routes llama a la función setup pasandole la instacia de express (app)

// -------------------------------------------------------------------------------------

//Usado?: YES
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: Define un middleware se utuiliza para validar una palabra, y si no coincide redirecciona al error


// -------------------------------------------------------------------------------------


//Usado?: YES
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: 
// Se inicializa setup con la instacia del express (app) como parámetro y dentro, 
//  para la ruta raiz  y el verbo GET, crea una constante con un mensaje de error 
//  y comprueba si viene la palabra secreta y si es así lo redirige a la
// -------------------------------------------------------------------------------------


//Usado?: YES
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: Envía al puerto un código HYML con un mensaje de error y un formulario para introducir la palabra secreta, y un botón para enviar el formulario


// -------------------------------------------------------------------------------------

//Usado?: YES
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: Analiza el cuerpo de todas las solicitudes entrantes
// despues guarda en sessión la palabra secreta secretoSuperSecreto
// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: Analiza el cuerpo de todas las solicitudes entrantes

// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: se guarda en sesión la palabra que venga en el fichero .env 
// y sino la encuentra guarda secretoSuperSecreto 

// -------------------------------------------------------------------------------------

//Usado?: YES
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: Con la variable app (es una instancia de express) se indica que escuche
// las peticiones que vengan el puerto que tenga la variable PORT, en este caso 4000
// -------------------------------------------------------------------------------------

//Usado?: YES
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: Middleware que verifica si la palabra es secreta y sino redirecciona a una ruta error

// -------------------------------------------------------------------------------------


//Usado?: YES
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: procesa las peticiones GET que vienen por la ruta /profile, primero ejecutando 
// el middleware que verifica la sessión y después mostrando el resultado en pantalla, es decir,
// el formulario LogOut.

// -------------------------------------------------------------------------------------


//Usado?: YES
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: Procesa las peticiones POST que vienen de la ruta /logout ,
// destruye la sesion actual y redirige a la ruta principal
// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  setup,
};
//--- Explicación: Exporta la función setup del fichero router

// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación: Exporta las funciones del fichero middleware
// -------------------------------------------------------------------------------------

