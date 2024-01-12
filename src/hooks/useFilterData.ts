import { useEffect, useState } from "react";
import { PokemonType } from "../types/Pokemon";

const useFilterData = (
  pokemonData: PokemonType[],
  searchValue: string,
  powerValue: number,
  setCurrentPage: (value: number) => void
) => {
  const [filteredData, setFilteredData] = useState<PokemonType[]>();
  useEffect(() => {
    if (pokemonData.length > 0) {
      const data = pokemonData?.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          pokemon.power! >= powerValue
      );
      setFilteredData(data);
      setCurrentPage(0);
    }
  }, [pokemonData, searchValue, powerValue]);

  return filteredData;
};

export default useFilterData;
