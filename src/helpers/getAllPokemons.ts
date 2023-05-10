import { pokemonApi } from "../api/pokemonApi";
import { BasicPokemon } from "../shared/types";

export const getAllPokemons = async () => {
    //limit: 1008
    const { data } = await pokemonApi.get<any>('/pokemon?limit=1008');
    const allPokemons: BasicPokemon[] = data.results.map((pkm:any,i:number) => {
        return { ...pkm, id: i + 1, isFav: false}
    });

    return allPokemons    
}