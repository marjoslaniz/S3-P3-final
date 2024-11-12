/*Es esta capa se definen los controladores, que determinan como se obtienen parametros 
de las url y llama a la funciones que los van a utiliar. Tambien invoca la renderizacion de la capa View*/


import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30,  obtenerSuperheroesMayoresDe30YconFiltros
} from '../services/superheroesService.mjs';
import { renderizarSuperHeroe, renderizarListaSuperHeroes } from '../views/responseViews.mjs';

export async function obtenerSuperheroePorIdController(req, res){
    const {id} = req.params;
    const superheroe = await obtenerSuperheroePorId(id);

    if(superheroe){
        res.send(renderizarSuperHeroe(superheroe));
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
    const superheroes = obtenerSuperheroesMayoresDe30();
    res.send(renderizarListaSuperHeroes(superheroes));
}

//export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    /*const { edad } = req.params; // Captura el parámetro edad de la URL
    const superheroe = await obtenerSuperheroesMayoresDe30(edad); // Pasa la edad como argumento a la función
    res.send(renderizarListaSuperheroes(superheroe));*/
//}

// Probamos con otro controlador

export async function obtenerSuperheroesMayoresDe30YConFiltrosController(req, res) {
    try {
      const superheroes = await obtenerSuperheroesMayoresDe30YconFiltros();
      if (superheroes.length === 0) {
        return res.status(404).send({ mensaje: "No se encontraron superhéroes mayores de 30 años" });
      }
      res.send(renderizarListaSuperHeroes(superheroes));
    } catch (error) {
      console.error("Error al obtener superhéroes:", error);
      res.status(500).send({ mensaje: "Error interno del servidor" });
    }
  }