/*export function renderizarSuperheroe(superheroe){
    return JSON.stringify(superheroe, null, 2);
}

export function renderizarListaSuperheroes(superheroes){
    return JSON.stringify(superheroes, null, 2);
}*/

export function renderizarSuperHeroe(superheroe) {
    return {
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal, 
        Edad: superheroe.edad, 
        Debilidad: superheroe.debilidad, 
        Poderes: superheroe.poderes, 
        Aliados: superheroe.aliados, 
        Enemigos: superheroe.enemigos
    };
}

export function renderizarListaSuperHeroes(superheroes){
    return superheroes.map(superheroe => renderizarSuperHeroe(superheroe));
}