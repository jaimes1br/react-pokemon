export interface BasicPokemon {
    name: string
    url: string
}

export interface InitialStatePokemon {
    isSaving: boolean,
    isLoading: boolean,
    allPokemons: BasicPokemon[],
    favPokemons: any[]
}