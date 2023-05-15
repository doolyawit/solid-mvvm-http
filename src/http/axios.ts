import axios from "axios";

axios
  .get("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

async function axiosPokeData(url: string): Promise<void> {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
// axiosPokeData("https://pokeapi.co/api/v2/pokemon/");
