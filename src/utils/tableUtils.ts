import { PokemonType } from "../types/Pokemon";

export const getTableHead = (firstRow: PokemonType) => {
  if (!firstRow.id) {
    return [];
  } else {
    const keys = Object.keys(firstRow);
    //add column Power
    const tableHead = [...keys, "Power"];
    return tableHead;
  }
};
