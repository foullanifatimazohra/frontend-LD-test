import { useState, useEffect } from "react";
import { PokemonType } from "../types/Pokemon";
import { calculatePowerRange } from "../utils/powerUtils";

const useCalculatePowerRange = (
  pokemonDataPerPage: PokemonType[] | undefined
) => {
  const [powerRange, setPowerRange] = useState<[number, number]>([0, 0]);
  // calculate the min and max power per page
  useEffect(() => {
    if (pokemonDataPerPage?.length) {
      const range = calculatePowerRange(pokemonDataPerPage);
      setPowerRange(range);
    } else {
      setPowerRange([0, 0]);
    }
  }, [pokemonDataPerPage]);

  return powerRange;
};

export default useCalculatePowerRange;
