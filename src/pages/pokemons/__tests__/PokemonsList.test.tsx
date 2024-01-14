import { PokemonsList } from "../PokemonsList";
import { PokemonProvider } from "../../../contexts/PokemonContext";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { PokemonContext } from "../../../contexts/PokemonContext";

test("Pokemons List should render Spinner if loading is true ", () => {
  const wrapper = render(
    <PokemonProvider>
      <PokemonsList />
    </PokemonProvider>
  );

  expect(wrapper.getByTestId("spinner")).toBeDefined();
});

test("renders table and pagination after successful rendering of PokemonContextProvider", () => {
  // Mock context values
  const mockedContextValues = {
    loading: false,
    pokemonData: [
      {
        id: 1,
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        hp: 45,
        attack: 49,
        defense: 49,
        special_attack: 65,
        special_defense: 65,
        speed: 45,
      },
      {
        id: 2,
        name: "Ivysaur",
        type: ["Grass", "Poison"],
        hp: 60,
        attack: 62,
        defense: 63,
        special_attack: 80,
        special_defense: 80,
        speed: 60,
      },
      {
        id: 3,
        name: "Venusaur",
        type: ["Grass", "Poison"],
        hp: 80,
        attack: 82,
        defense: 83,
        special_attack: 100,
        special_defense: 100,
        speed: 80,
      },
    ],
    filteredData: [
      {
        id: 1,
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        hp: 45,
        attack: 49,
        defense: 49,
        special_attack: 65,
        special_defense: 65,
        speed: 45,
      },
      {
        id: 2,
        name: "Ivysaur",
        type: ["Grass", "Poison"],
        hp: 60,
        attack: 62,
        defense: 63,
        special_attack: 80,
        special_defense: 80,
        speed: 60,
      },
      {
        id: 3,
        name: "Venusaur",
        type: ["Grass", "Poison"],
        hp: 80,
        attack: 82,
        defense: 83,
        special_attack: 100,
        special_defense: 100,
        speed: 80,
      },
    ],
    tableHead: [
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
    ],
    currentPage: 1,
    setCurrentPage: () => {},
    itemsPerPage: 10,
    setItemsPerPage: () => {},
    pokemonDataPerPage: [
      {
        id: 1,
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        hp: 45,
        attack: 49,
        defense: 49,
        special_attack: 65,
        special_defense: 65,
        speed: 45,
      },
      {
        id: 2,
        name: "Ivysaur",
        type: ["Grass", "Poison"],
        hp: 60,
        attack: 62,
        defense: 63,
        special_attack: 80,
        special_defense: 80,
        speed: 60,
      },
      {
        id: 3,
        name: "Venusaur",
        type: ["Grass", "Poison"],
        hp: 80,
        attack: 82,
        defense: 83,
        special_attack: 100,
        special_defense: 100,
        speed: 80,
      },
    ],
    searchValue: "",
    powerValue: 0,
    setPowerValue: (value: number) => {},
    setSearchValue: (value: string) => {},
  };

  const { container, getByTestId } = render(
    <PokemonContext.Provider value={mockedContextValues}>
      <PokemonsList />
    </PokemonContext.Provider>
  );

  // Assert that table and pagination are rendered
  expect(getByTestId("table")).toBeDefined();
  expect(getByTestId("pagination")).toBeDefined();
  const tableRows = container.querySelectorAll("tbody tr");
  //3 rows
  expect(tableRows.length).toBe(3);
});
