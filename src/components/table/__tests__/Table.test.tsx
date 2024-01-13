import { render } from "@testing-library/react";
import { Table } from "../Table";
import { test, expect } from "vitest";

test("renders Table component with provided data and head", () => {
  const mockData = [
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
  ];
  const mockHead = [
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

  const wrapper = render(<Table data={mockData} head={mockHead} />);
  const tableRows = wrapper.container.querySelectorAll("tbody tr");
  //3 rows
  expect(tableRows.length).toBe(3);
});
