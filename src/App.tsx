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

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<PokemonType[]>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonData();
        setPokemonData(data);
        console.log("data", data);
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <TextField
        placeholder="Search..."
        icon={<SearchIcon />}
        value={searchValue}
        setValue={setSearchValue}
      />
      {!pokemonData?.length ? (
        <NoData />
      ) : (
        <>
          <Table data={pokemonData!} />
          <PaginationBar
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalPages={20}
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
