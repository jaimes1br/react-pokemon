export interface BasicPokemon {
    name: string
    url: string
    id: number
    isFav: boolean
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
    pokemonDetail: PokemonDetail | PokemonDetailFake,
    isError: boolean,
}

export interface InitialStateAuth {
    status: 'checking' |'not-authenticated' | 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}
export interface FormDataValid {
    email: string
    password: string
    name?: string
    confirmPassword?: string
}

export interface RegisterUser {
    email: string,
    password: string,
    displayName: string
}

export interface LoginUser{
    email: string,
    password: string
}