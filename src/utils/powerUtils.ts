import { PokemonType } from "../types/Pokemon";

export const calculatePowerRange = (
  pokemonData: PokemonType[]
): [number, number] => {
  if (pokemonData.length === 0) {
    return [0, 0];
  }

  const powers = pokemonData.map((pokemon) => pokemon.power!);

  const minPower = Math.min(...powers);
  const maxPower = Math.max(...powers);

  return [minPower, maxPower];
};
