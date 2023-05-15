// //get
// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;",
//   },
//   body: JSON.stringify({
//     name: "clefairy",
//   }),

import axios from "axios";

// };
async function fetchPokeData(url: string): Promise<void> {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
}
fetchPokeData("https://pokeapi.co/api/v2/pokemon/");
// fetchPokeData("https://pokeapi.co/api/v2/pokemon/clefairy");
