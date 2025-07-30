
// // This How To Get API with fetch()
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {
//     if (!response.ok){
//       throw new Error("It's Not Ok")
//     }
//     else return response.json()
//   })
//   .then(data => console.log(data.name))
//   .catch(error => console.error(error))

  // This How To Get The Same API with async/await 


async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    if (!response.ok){
      throw new Error("Couldn't Fetch Data")
    }
    const data = await response.json()
    const pokemonImage = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonImage")
    
    imgElement.src = pokemonImage
    imgElement.style.display = "block"
  } catch (error) {
    console.error(error)
  }
}

fetchData()
