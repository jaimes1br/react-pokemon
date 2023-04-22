import { pokemonApi } from "../api/pokemonApi";
import { BasicPokemon } from "../shared/types/types";

export const getAllPokemons = async () => {
    
    const { data } = await pokemonApi.get<any>('/pokemon?limit=1008');
    const allPokemons: BasicPokemon[] = data.results.map((pkm:any,i:number) => {
        return { ...pkm, id: i + 1}
    });
    
    return allPokemons    
}