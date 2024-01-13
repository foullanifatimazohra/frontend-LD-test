import { getTableHead } from "../tableUtils";
import { test, expect } from "vitest";
import { PokemonType } from "../../types/Pokemon";

test("returns empty array if firstRow is empty", () => {
  const firstRow = {} as PokemonType;
  const result = getTableHead(firstRow);
  expect(result).toEqual([]);
});

test('returns tableHead with "Power" column if firstRow is not empty', () => {
  const firstRow: PokemonType = {
    id: 3,
    name: "Venusaur",
    type: ["Grass", "Poison"],
    hp: 80,
    attack: 82,
    defense: 83,
    special_attack: 100,
    special_defense: 100,
    speed: 80,
  };
  const result = getTableHead(firstRow);
  const expectedTableHead = [
    "id",
    "name",
    "type",
    "hp",
    "attack",
    "defense",
    "special_attack",
    "special_defense",
    "speed",
    "Power",
  ];
  expect(result).toEqual(expectedTableHead);
});
