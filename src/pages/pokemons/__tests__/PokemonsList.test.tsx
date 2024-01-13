import { PokemonsList } from "../PokemonsList";
import { PokemonProvider } from "../../../contexts/PokemonContext";

import { test, expect } from "vitest";
import { render } from "@testing-library/react";

test("Pokemons List should render Spinner if loading is true ", () => {
  const wrapper = render(
    <PokemonProvider>
      <PokemonsList />
    </PokemonProvider>
  );

  expect(wrapper.getByTestId("spinner")).toBeDefined();
});
