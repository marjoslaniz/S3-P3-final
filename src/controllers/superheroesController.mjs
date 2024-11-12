/*Es esta capa se definen los controladores, que determinan como se obtienen parametros 
de las url y llama a la funciones que los van a utiliar. Tambien invoca la renderizacion de la capa View*/


import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30  /*obtenerSuperheroesMayoresDe30YconFiltros*/
} from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperHeroes } from '../views/responseViews.mjs';

export async function obtenerSuperheroePorIdController(req, res){
    const {id} = req.params;
    const superheroe = await obtenerSuperheroePorId(id);

    if(superheroe){
        res.send(renderizarSuperheroe(superheroe));
    }else{
        res.status(404).send({mensaje: "Superheroe no encontrado"});
    }
}


export async function obtenerTodosLosSuperheroesController(req, res){
    const superheroes = await obtenerTodosLosSuperheroes();
    res.send(renderizarListaSuperHeroes(superheroes));
}


export async function buscarSuperheroesPorAtributoController(req, res){
    const {atributo, valor} = req.params;
    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
    if(superheroes.length > 0){
        res.send(renderizarListaSuperHeroes(superheroes));
    }else{
        res.status(404).send({mesaje: "No se encontraron superheroes con ese atributo"});
    }
}

export async function obtenerSuperheroeMayoresDe30Controller(req, res){
    const superheroes = await obtenerSuperheroesMayoresDe30(); //falto el await. Por eso daba error en mayores-30
    res.send(renderizarListaSuperHeroes(superheroes));
}

