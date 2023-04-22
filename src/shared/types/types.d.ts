export interface BasicPokemon {
    name: string
    url: string
    id: number
}

export interface InitialStatePokemon {
    isSaving: boolean,
    isLoading: boolean,
    allPokemons: BasicPokemon[],
    favPokemons: any[],
    currentPage: number
}