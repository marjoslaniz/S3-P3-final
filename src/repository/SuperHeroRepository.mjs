import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';


class SuperHeroRepository extends IRepository {
    async obtenerPorId(id){
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        const query = {[atributo]: new RegExp(valor, 'i')};
        return await SuperHero.find(query);
    }

    async obtenerMayoresDe30(){
        try {
          return await SuperHero.find({
            edad: { $gt: 30 }, // Filtra por edad
            planetaOrigen: 'Tierra', // También filtra por planeta de origen
            $expr: { $gte: [{ $size: "$poderes" }, 2] } // Al menos 2 poderes
          });
        } catch (error) {
          console.error('Error al obtener superhéroes mayores de 30:', error);
          throw error;
        }
    }
    //Probamos con otro async
    /*async obtenerMayoresDe30() {
        try {
          return await SuperHero.find({
            edad: { $gt: 30 }, // Filtra por edad
            planetaOrigen: 'Tierra', // También filtra por planeta de origen
            $expr: { $gte: [{ $size: "$poderes" }, 2] } // Al menos 2 poderes
          });
        } catch (error) {
          console.error('Error al obtener superhéroes mayores de 30:', error);
          throw error;
        }
      }*/
}
    

export default new SuperHeroRepository();
