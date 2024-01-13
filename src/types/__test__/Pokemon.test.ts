import { PokemonType } from "../Pokemon";
import { test, expect } from "vitest";

// to test if an object is type of PokemonType
function isPokemonType(obj: any): obj is PokemonType {
  return (
    typeof obj === "object" &&
    "id" in obj &&
    "name" in obj &&
    "type" in obj &&
    "hp" in obj &&
    "attack" in obj &&
    "defense" in obj &&
    "special_attack" in obj &&
    "special_defense" in obj &&
    "speed" in obj &&
    "power" in obj
  );
}

test("valid Pokemon Type object ", () => {
  const validPokemon: PokemonType = {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    hp: 45,
    attack: 49,
    defense: 49,
    special_attack: 65,
    special_defense: 65,
    speed: 45,
    power: 400,
  };

  expect(isPokemonType(validPokemon)).toBe(true);
});

test("Invalid Pokemon Type object ", () => {
  const validPokemon = {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
  };

  expect(isPokemonType(validPokemon)).toBe(false);
});
