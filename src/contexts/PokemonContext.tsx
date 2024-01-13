// contexts/PokemonContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { PokemonType } from "../types/Pokemon";
import { getPokemonData } from "../services/PokemonService";
import { getTableHead } from "../utils/tableUtils";
import { calculatePower } from "../utils/calculatePower";

interface PokemonContextProps {
  loading: boolean;
  pokemonData: PokemonType[];
  tableHead?: string[];
  filteredData?: PokemonType[];
  pokemonDataPerPage?: PokemonType[];
  currentPage: number;
  itemsPerPage: number;
  searchValue: string;
  powerValue: number;
  setItemsPerPage: (value: number) => void;
  setPowerValue: (value: number) => void;
  setSearchValue: (value: string) => void;
  setCurrentPage: (value: number) => void;
}

const PokemonContext = createContext<PokemonContextProps | undefined>(
  undefined
);

const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<PokemonType[]>([]);
  const [tableHead, setTableHead] = useState<string[]>();
  const [filteredData, setFilteredData] = useState<PokemonType[]>();
  const [pokemonDataPerPage, setPokemonDataPerPage] = useState<PokemonType[]>();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [powerValue, setPowerValue] = useState(0);

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonData();

        if (data.length) {
          const headKeys = getTableHead(data[0]);
          if (headKeys) {
            setTableHead(headKeys);
          }

          const pokemonDataWithPower: PokemonType[] = data.map(
            (pokemon: PokemonType) => {
              return { ...pokemon, power: calculatePower(pokemon) };
            }
          );

          setPokemonData(pokemonDataWithPower);
        }
      } finally {
        //setLoading(false);
      }
    };
    fetchData();
  }, []);

  // filter data
  useEffect(() => {
    if (pokemonData?.length > 0) {
      const data = pokemonData?.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          pokemon.power! >= powerValue
      );
      setFilteredData(data);
      setCurrentPage(0);
    }
  }, [pokemonData, searchValue, powerValue]);

  // pagination
  useEffect(() => {
    if (filteredData?.length) {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPokemonDataPerPage(filteredData.slice(startIndex, endIndex));
    } else {
      setPokemonDataPerPage([]);
    }

    setLoading(false);
  }, [currentPage, itemsPerPage, filteredData]);

  const contextValue: PokemonContextProps = {
    loading,
    pokemonData,
    tableHead,
    filteredData,
    pokemonDataPerPage,
    currentPage,
    itemsPerPage,
    searchValue,
    powerValue,
    setItemsPerPage,
    setPowerValue,
    setSearchValue,
    setCurrentPage,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemonContext = (): PokemonContextProps => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemonContext must be used within a PokemonProvider");
  }
  return context;
};

export { PokemonProvider, usePokemonContext };
