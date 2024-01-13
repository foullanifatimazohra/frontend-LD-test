import { Row } from "../Row";
import { render } from "@testing-library/react";

import { test, expect } from "vitest";

test("Row show attribute type in one line seperated with ,", () => {
  const mockData = {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    hp: 45,
    attack: 49,
    defense: 49,
    special_attack: 65,
    special_defense: 65,
    speed: 45,
  };

  const wrapper = render(<Row {...mockData} />);
  const typeRow = wrapper.container.querySelectorAll("td")[2];

  expect(typeRow.textContent).toBe("Grass,Poison");
});

test("Row show the type attribute without , ", () => {
  const mockData = {
    id: 1,
    name: "Bulbasaur",
    type: ["Grass"],
    hp: 45,
    attack: 49,
    defense: 49,
    special_attack: 65,
    special_defense: 65,
    speed: 45,
  };

  const wrapper = render(<Row {...mockData} />);
  const typeRow = wrapper.container.querySelectorAll("td")[2];

  expect(typeRow.textContent).toBe("Grass");
});
