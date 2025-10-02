const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 24
let offset = 0

// Array que guarda todos os pokémons carregados
let allLoadedPokemons = []

// Função para carregar pokémons
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        allLoadedPokemons = allLoadedPokemons.concat(pokemons)

        // Criar os cards (somente com nome, número, tipos e imagem)
        const newHtml = pokemons.map(pokemon => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('')

        pokemonList.innerHTML += newHtml
    })
}

// Modal
const modal = document.getElementById('pokemonModal')
const modalBody = document.getElementById('modalBody')
const closeModal = document.getElementById('closeModal')

function openPokemonModal(pokemon) {
    modalBody.innerHTML = `
        <h2>${pokemon.name} (#${pokemon.number})</h2>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
        <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
        <p><strong>Habilidades:</strong> ${pokemon.abilities.join(', ')}</p>
        <ul>
            ${pokemon.stats.map(s => `<li>${s.name}: ${s.base}</li>`).join('')}
        </ul>
    `
    modal.style.display = 'block'
}

// Fechar modal
closeModal.onclick = () => modal.style.display = 'none'
window.onclick = (event) => {
    if (event.target === modal) modal.style.display = 'none'
}

// Event delegation para todos os pokémons (antigos e novos)
pokemonList.addEventListener('click', (event) => {
    const li = event.target.closest('.pokemon')
    if (!li) return

    const children = Array.from(pokemonList.children)
    const index = children.indexOf(li)

    if (index > -1) {
        openPokemonModal(allLoadedPokemons[index])
    }
})

// Carregar os primeiros pokémons
loadPokemonItens(offset, limit)

// Botão Load More
loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})
