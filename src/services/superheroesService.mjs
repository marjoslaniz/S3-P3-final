
import superHeroRepository from '../repository/SuperHeroRepository.mjs'

export async function obtenerSuperheroesMayoresDe30(){
    return await superHeroRepository.obtenerMayoresDe30();
}
export async function obtenerSuperheroePorId(id){
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor){
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

//agregada para probar ahora
export async function obtenerSuperheroesMayoresDe30YconFiltros() {
    const heroes = await superHeroRepository.obtenerTodos();
    return heroes.filter(hero => hero.edad > 30); 
  }

