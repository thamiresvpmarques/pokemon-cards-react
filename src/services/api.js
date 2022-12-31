
async function getListPoke (offSet) {
    const response = await fetch( `https://pokeapi.co/api/v2/pokemon?limit=10&offset==${offSet}`)
    return await response.json()
    
}
async function getPokemon (url){
    const response = await fetch(url)
    return await response.json()
}
async function getPokemonInfo(name){
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    return await response.json()
   
  }
export { getListPoke, getPokemon ,getPokemonInfo}