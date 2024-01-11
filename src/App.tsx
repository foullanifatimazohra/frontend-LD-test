import TextField from "./components/text-field/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { NoData } from "./components/table/NoData";
import { Table } from "./components/table/Table";
import { Spinner } from "./components/spinner/Spinner";
import { useEffect } from "react";
import WindPowerIcon from "@mui/icons-material/WindPower";

import { getPokemonData } from "./services/PokemonService";
import { PaginationBar } from "./components/table/PaginationBar";
import { PokemonType } from "./types/Pokemon";
import { getTableHead } from "./utils/tableUtils";
import { calculatePower } from "./utils/calculatePower";
import { calculatePowerRange } from "./utils/powerUtils";
import { Box } from "@mui/material";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [powerValue, setPowerValue] = useState<number>();
  const [pokemonData, setPokemonData] = useState<PokemonType[]>();
  const [pokemonDataPerPage, setPokemonDataPerPage] = useState<PokemonType[]>();
  const [tableHead, setTableHead] = useState<string[]>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [filteredData, setFilteredData] = useState<PokemonType[]>();
  const [powerRange, setPowerRange] = useState<[number, number]>([0, 0]);
  // Todo :  create custom hook and refactor all the useEffect functions

  // add loading state
  const [loading, setLoading] = useState<Boolean>(true);
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

  // display data per page
  useEffect(() => {
    if (filteredData?.length) {
      // calculate the start and the end index
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPokemonDataPerPage(filteredData.slice(startIndex, endIndex));
    }
  }, [filteredData, currentPage, itemsPerPage]);

  // calculate the min and max power per page
  useEffect(() => {
    if (pokemonDataPerPage?.length) {
      const range = calculatePowerRange(pokemonDataPerPage);
      setPowerRange(range);
    }
  }, [pokemonDataPerPage]);

  // search value
  useEffect(() => {
    // Function to update filteredData based on the search term
    const updateFilteredData = () => {
      const normalizedSearchTerm = searchValue.toLowerCase();
      const newFilteredData = pokemonData!
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(normalizedSearchTerm)
        )
        .filter((pokemon) => powerValue && pokemon.power! >= powerValue);
      setFilteredData(newFilteredData);
    };

    if (pokemonData?.length) {
      updateFilteredData();
    }
  }, [searchValue, powerValue]);

  return (
    <>
      <Box display="flex" flexDirection="row" gap="20px" width="100%">
        <TextField
          placeholder="Search..."
          icon={<SearchIcon />}
          value={searchValue}
          setValue={setSearchValue}
        />
        <TextField
          type="number"
          placeholder="Power threshold"
          icon={<WindPowerIcon />}
          value={powerValue}
          setValue={setPowerValue}
        />
      </Box>

      <div>
        Min Power: {powerRange[0]} | Max Power: {powerRange[1]}
      </div>
      {loading ? (
        <Spinner />
      ) : !pokemonDataPerPage?.length ? (
        <NoData />
      ) : (
        <>
          <Table data={pokemonDataPerPage!} head={tableHead} />
          <PaginationBar
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalPages={filteredData?.length!}
            setCurrentPage={setCurrentPage}
            setItemsPerPage={setItemsPerPage}
          />
        </>
      )}
    </>
  );
}

export default App;
