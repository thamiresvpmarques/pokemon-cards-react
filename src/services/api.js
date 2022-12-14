
async function getListPoke (offSet) {
    const response = await fetch( `https://pokeapi.co/api/v2/pokemon?limit=${offSet}&offset==${offSet}`)
    return await response.json()
}
async function getPokemon (url){
    const response = await fetch(url)
    return await response.json()
}
export { getListPoke, getPokemon }