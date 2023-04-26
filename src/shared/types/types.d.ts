export interface BasicPokemon {
    name: string
    url: string
    id: number
}

export interface StatsPokemon {
    'special-attack': number,
    'special-defense': number,
    attack: number,
    defense: number,
    hp: number,
    speed: number
}

export interface PokemonDetail {
    id: number
    imageUrl: string
    name: string
    stats: StatsPokemon
    types: string[]
}

export  interface PokemonDetailFake {
    id: -1
    imageUrl: ''
    name: ''
    stats: StatsPokemon
    types: []
}
export interface InitialStatePokemon {
    isSaving: boolean,
    isLoading: boolean,
    allPokemons: BasicPokemon[],
    favPokemons: any[],
    currentPage: number,
    pokemonDetail: PokemonDetail | PokemonDetailFake
}