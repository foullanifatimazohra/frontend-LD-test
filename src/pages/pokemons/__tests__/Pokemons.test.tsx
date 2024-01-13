import { Pokemons } from "../Pokemons";
import { PokemonProvider } from "../../../contexts/PokemonContext";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";

test("Pokemons page should render seach/ power text field ", () => {
  const wrapper = render(
    <PokemonProvider>
      <Pokemons />
    </PokemonProvider>
  );

  const inputsOfThePokemonsPage = wrapper.container.querySelectorAll("input");
  // 2 inputs
  expect(inputsOfThePokemonsPage.length).toBe(2);
});
