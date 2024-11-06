import express from 'express'; //importamos el framework Express

//Importamos los controladores
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, obtenerTodosSuperheroes } from './controllers/superheroesController.mjs';

const app = express(); //Inicializamos una aplicacion de Express
const PORT = 3005; //Definimos el puerto en el que escuchara el servidor

//middleware para permitir el manejo de solicitudes con cuerpo en formato JSON

app.use(express.json());

//Rutas
app.get('/superheroes', obtenerTodosSuperheroes);
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);

//inicia el server
app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
