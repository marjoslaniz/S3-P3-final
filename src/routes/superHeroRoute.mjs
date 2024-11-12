import express from 'express';
import { 
    //obtenerSuperheroeMayoresDe30Controller,
    obtenerTodosLosSuperheroesController,
    obtenerSuperheroePorIdController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroeMayoresDe30Controller,
    //obtenerSuperheroesMayoresDe30YConFiltrosController,
    
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes/mayores-30', obtenerSuperheroeMayoresDe30Controller),
router.get('/heroes', obtenerTodosLosSuperheroesController),
router.get('/heroes/:id', obtenerSuperheroePorIdController),
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

//router.get('/superheroes/filtros', obtenerSuperheroesMayoresDe30YConFiltrosController)




export default router;
