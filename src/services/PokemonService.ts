import axios from "axios";

export const getPokemonData = async () => {
  try {
    const response = await axios.get("/pokemon.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return [];
  }
};
