export interface BasicPokemon {
    id: number
    isFav: boolean
    name: string
    url: string
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
    isFav: boolean
    name: string
    stats: StatsPokemon
    types: string[],
}

export interface PokemonDetailApi {
    id: number
    imageUrl: string
    name: string
    stats: StatsPokemon
    types: string[]
}

export  interface PokemonDetailFake {
    id: -1
    imageUrl: ''
    isFav: boolean
    name: ''
    stats: StatsPokemon
    types: [],
}
export interface InitialStatePokemon {
    allPokemons: BasicPokemon[],
    currentPage: number,
    favPokemons: any[],
    isError: boolean,
    isLoading: boolean,
    isSaving: boolean,
    pokemonDetail: PokemonDetail | PokemonDetailFake,
}

export interface InitialStateAuth {
    displayName: null,
    email: null,
    errorMessage: null
    photoURL: null,
    status: 'checking' |'not-authenticated' | 'authenticated'
    uid: null,
}
export interface FormDataValid {
    confirmPassword?: string
    email: string
    name?: string
    password: string
}

export interface RegisterUser {
    displayName: string
    email: string,
    password: string,
}

export interface LoginUser{
    email: string,
    password: string
}

export interface InitialStateConfig{
    lang: string
}