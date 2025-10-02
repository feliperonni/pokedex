
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight
    pokemon.abilities = pokeDetail.abilities.map((ab) => ab.ability.name)
    pokemon.stats = pokeDetail.stats.map((st) => ({
        name: st.stat.name,
        base: st.base_stat
    }))

    return pokemon
}


pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = async (offset = 0, limit = 24) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    const response = await fetch(url)
    const jsonBody = await response.json()
    const pokemonsBasic = jsonBody.results

    const pokemonsDetails = await Promise.all(
        pokemonsBasic.map(async (poke) => {
            const detail = await fetch(poke.url)
            const detailJson = await detail.json()
            return convertPokeApiDetailToPokemon(detailJson)
        })
    )

    return pokemonsDetails
}
