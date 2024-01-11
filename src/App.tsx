import TextField from "./components/text-field/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { NoData } from "./components/table/NoData";
import { Table } from "./components/table/Table";
import { Spinner } from "./components/spinner/Spinner";
import { useEffect } from "react";

import { getPokemonData } from "./services/PokemonService";
import { PaginationBar } from "./components/table/PaginationBar";
import { PokemonType } from "./types/Pokemon";
import { getTableHead } from "./utils/TableUtils";
import { calculatePower } from "./utils/calculatePower";
import { calculatePowerRange } from "./utils/powerUtils";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<PokemonType[]>();
  const [pokemonDataPerPage, setPokemonDataPerPage] = useState<PokemonType[]>();
  const [tableHead, setTableHead] = useState<string[]>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [powerRange, setPowerRange] = useState<[number, number]>([0, 0]);

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
  }, [itemsPerPage, currentPage, totalPages]);

  // display data per page
  useEffect(() => {
    console.log(pokemonData?.length, currentPage, itemsPerPage);
    if (pokemonData?.length) {
      // calculate the total number of pages
      setTotalPages(Math.ceil(pokemonData.length / itemsPerPage));
      // calculate the start and the end index
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPokemonDataPerPage(pokemonData.slice(startIndex, endIndex));
    }
  }, [pokemonData, currentPage, itemsPerPage]);

  // calculate the min and max power per page
  useEffect(() => {
    if (pokemonDataPerPage?.length) {
      const range = calculatePowerRange(pokemonDataPerPage);
      setPowerRange(range);
    }
  }, [pokemonDataPerPage]);

  return (
    <>
      <TextField
        placeholder="Search..."
        icon={<SearchIcon />}
        value={searchValue}
        setValue={setSearchValue}
      />
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
            totalPages={pokemonData?.length!}
            setCurrentPage={setCurrentPage}
            setItemsPerPage={setItemsPerPage}
          />
        </>
      )}
    </>
  );
}

export default App;
