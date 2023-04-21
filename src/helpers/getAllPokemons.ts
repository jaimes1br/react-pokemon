import { pokemonApi } from "../api/pokemonApi";

export const getAllPokemons = async () => {
    
    const { data } = await pokemonApi.get<any>('/pokemon?limit=1008');
    const allPokemons = data.results

    return allPokemons    
}