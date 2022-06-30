//axios
const axios = require("axios")

//async & await


//fetching from our own server

const getCharacters = async () => {
  const response = await axios.get("http://localhost:4000/characters")
  console.log(response)
}
// getCharacters()

//fetching by id

const getOneCharacter = async (id) => {
  const response = await axios.get(`http://localhost:4000/characters/${id}`)
  console.log(response.data)
}

// getOneCharacter(25)

const getPokemon = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
  console.log(response.data)
}

getPokemon()

//fetching random api