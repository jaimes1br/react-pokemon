import { pokemonApi } from "../api/pokemonApi"
import { StatsPokemon } from "../shared/types";

export const getPokemonByIdOrName = async ( search: string) => {

    const { data } = await pokemonApi.get(`/pokemon/${search}`);
    const { id } = data;
    const name =  data.name.replace(/(^\w{1})/g,(letter: string) => letter.toUpperCase());
    
    const { stats } = data;
    const statsPokemon: StatsPokemon = {
        'special-attack':  stats[3].base_stat,
        'special-defense': stats[4].base_stat,
        attack:            stats[1].base_stat,
        defense:           stats[2].base_stat,
        hp:                stats[0].base_stat,
        speed:             stats[5].base_stat,
    };

    const types = data.types.map((type: { type: { name: string; }; }) => type.type.name);
    
    const pokemon = {
        id,
        imageUrl: data.sprites.front_default,
        name,
        stats: statsPokemon,
        types
    }
     
    return pokemon
}