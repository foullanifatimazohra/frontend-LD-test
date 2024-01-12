import { useEffect, useState } from "react";

import { PokemonType } from "../types/Pokemon";

const usePaginationData = (
  filteredData: PokemonType[] | undefined,
  currentPage: number,
  itemsPerPage: number
) => {
  const [pokemonDataPerPage, setPokemonDataPerPage] = useState<PokemonType[]>();
  useEffect(() => {
    if (filteredData?.length) {
      // calculate the start and the end index
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPokemonDataPerPage(filteredData.slice(startIndex, endIndex));
    } else {
      setPokemonDataPerPage([]);
    }
  }, [currentPage, itemsPerPage, filteredData]);

  return pokemonDataPerPage;
};

export default usePaginationData;
