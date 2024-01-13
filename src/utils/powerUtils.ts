import { PokemonType } from "../types/Pokemon";

export const calculatePower = (pokemon: PokemonType) => {
  return (
    pokemon.hp +
    pokemon.attack +
    pokemon.defense +
    pokemon.special_attack +
    pokemon.special_defense +
    pokemon.speed
  );
};

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
