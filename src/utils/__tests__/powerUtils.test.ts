import { PokemonType } from "../../types/Pokemon";
import { calculatePower, calculatePowerRange } from "../powerUtils";
import { test, expect, describe } from "vitest";
describe("calculatePower", () => {
  test("calculates the power correctly for a given Pokemon", () => {
    const pokemon: PokemonType = {
      id: 1,
      name: "Venusaur",
      type: ["Grass", "Poison"],
      hp: 10,
      attack: 20,
      defense: 15,
      special_attack: 25,
      special_defense: 18,
      speed: 30,
    };

    const power = calculatePower(pokemon);

    // Expected power: 10 + 20 + 15 + 25 + 18 + 30 = 118
    expect(power).toBe(118);
  });
});

describe("calculatePowerRange", () => {
  test("calculates the power range correctly for a list of Pokemon", () => {
    const pokemonData: PokemonType[] = [
      {
        id: 1,
        name: "Venusaur",
        type: ["Grass", "Poison"],
        hp: 10,
        attack: 20,
        defense: 15,
        special_attack: 25,
        special_defense: 18,
        speed: 30,
        power: 118,
      },
      {
        id: 1,
        name: "Venusaur",
        type: ["Grass", "Poison"],
        hp: 12,
        attack: 22,
        defense: 16,
        special_attack: 23,
        special_defense: 20,
        speed: 32,
        power: 125,
      },
      {
        id: 1,
        name: "Venusaur",
        type: ["Grass", "Poison"],
        hp: 8,
        attack: 18,
        defense: 13,
        special_attack: 28,
        special_defense: 15,
        speed: 28,
        power: 110,
      },
    ];

    const powerRange = calculatePowerRange(pokemonData);

    // Expected power range: [110, 125]
    expect(powerRange).toEqual([110, 125]);
  });

  test("returns [0, 0] if the input Pokemon array is empty", () => {
    const powerRange = calculatePowerRange([]);
    expect(powerRange).toEqual([0, 0]);
  });
});
