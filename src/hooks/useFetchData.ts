import { useState, useEffect } from "react";
import { getPokemonData } from "../services/PokemonService";
import { PokemonType } from "../types/Pokemon";
import { getTableHead } from "../utils/tableUtils";
import { calculatePower } from "../utils/calculatePower";

const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<PokemonType[]>([]);
  const [tableHead, setTableHead] = useState<string[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonData();

        if (data.length) {
          // get the table head keys
          const headKeys = getTableHead(data[0]);
          if (headKeys) {
            setTableHead(headKeys);
          }
          // calculate the power
          const pokemonDataWithPower: PokemonType[] = data.map(
            (pokemon: PokemonType) => {
              return { ...pokemon, power: calculatePower(pokemon) };
            }
          );

          setPokemonData(pokemonDataWithPower);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { loading, pokemonData, tableHead };
};

export default useFetchData;
