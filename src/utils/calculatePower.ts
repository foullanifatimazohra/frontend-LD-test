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
