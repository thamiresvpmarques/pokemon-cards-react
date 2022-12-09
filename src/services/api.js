async function getListPoke () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    return await response.json()
}
async function getPokemon (url){
    const response = await fetch(url)
    return await response.json()
}
export { getListPoke, getPokemon }