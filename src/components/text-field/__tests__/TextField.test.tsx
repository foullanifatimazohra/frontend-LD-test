import TextField from "../TextField";
import { render, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import { Pokemons } from "../../../pages/pokemons/Pokemons";
import { PokemonProvider } from "../../../contexts/PokemonContext";

test("TextField renders correctly with provided props", () => {
  const wrapper = render(
    <TextField
      placeholder="Test Placeholder"
      value="Test Value"
      setValue={() => {}}
    />
  );
  expect(wrapper).toBeTruthy();
  //get the text field and check the default type + placeholder + value
  const input = wrapper.container.querySelector("input");
  expect(input?.type).toBe("text");
  expect(input?.placeholder).toBe("Test Placeholder");
  expect(input?.value).toBe("Test Value");
});

test("TextField shows error if needed ", () => {
  const wrapper = render(
    <TextField
      placeholder="Test Placeholder"
      value="Test Value"
      error="Error test"
      setValue={() => {}}
    />
  );
  expect(wrapper).toBeTruthy();

  expect(wrapper.container.getElementsByTagName("p")).toBeDefined();
});

test("Pokemons component updates search value correctly", () => {
  const wrapper = render(
    <PokemonProvider>
      <Pokemons />
    </PokemonProvider>
  );

  const searchInput = wrapper.container.querySelectorAll("input")[0];

  // Simulate user typing into the search input
  if (searchInput) {
    fireEvent.change(searchInput, { target: { value: "Pikachu" } });

    expect(searchInput.value).toBe("Pikachu");
  }
});

test("Pokemons component updates power value correctly", () => {
  const wrapper = render(
    <PokemonProvider>
      <Pokemons />
    </PokemonProvider>
  );

  const powerInput = wrapper.container.querySelectorAll("input")[1];

  // Simulate user typing into the search input
  if (powerInput) {
    fireEvent.change(powerInput, { target: { value: 30 } });
    // type number
    expect(powerInput?.type).toBe("number");
    expect(powerInput.value).toBe("30");
  }
});
