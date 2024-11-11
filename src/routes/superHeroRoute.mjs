import express from 'express';
import { 
    //obtenerSuperheroeMayoresDe30Controller,
    obtenerTodosLosSuperheroesController,
    obtenerSuperheroePorIdController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30YConFiltrosController,
    
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30YConFiltrosController)
router.get('/heroes', obtenerTodosLosSuperheroesController),
router.get('/heroes/:id', obtenerSuperheroePorIdController),
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

//router.get('/superheroes/filtros', obtenerSuperheroesMayoresDe30YConFiltrosController)




export default router;
