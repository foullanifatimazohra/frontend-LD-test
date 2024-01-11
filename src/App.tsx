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

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<PokemonType[]>();
  const [pokemonDataPerPage, setPokemonDataPage] = useState<PokemonType[]>();
  const [tableHead, setTableHead] = useState<string[]>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);
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
          setPokemonData(data);
        }
      } finally {
        //Todo : add loading state
      }
    };
    fetchData();
  }, [itemsPerPage, currentPage, totalPages]);
  useEffect(() => {
    console.log(pokemonData?.length, currentPage, itemsPerPage);
    if (pokemonData?.length) {
      // calculate the total number of pages
      setTotalPages(Math.ceil(pokemonData.length / itemsPerPage));
      // calculate the start and the end index
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setPokemonDataPage(pokemonData.slice(startIndex, endIndex));
    }
  }, [pokemonData, currentPage, itemsPerPage]);

  return (
    <>
      <TextField
        placeholder="Search..."
        icon={<SearchIcon />}
        value={searchValue}
        setValue={setSearchValue}
      />
      {!pokemonDataPerPage?.length ? (
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

      <Spinner />
    </>
  );
}

export default App;
