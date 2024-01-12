import TextField from "./components/text-field/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { NoData } from "./components/table/NoData";
import { Table } from "./components/table/Table";
import { Spinner } from "./components/spinner/Spinner";
import { useEffect } from "react";
import WindPowerIcon from "@mui/icons-material/WindPower";
import { PaginationBar } from "./components/table/PaginationBar";

import { calculatePowerRange } from "./utils/powerUtils";
import { Box } from "@mui/material";
import useFetchData from "./hooks/useFetchData";
import useFilterData from "./hooks/useFilterData";
import usePaginationData from "./hooks/usePaginationData";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [powerValue, setPowerValue] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const [powerRange, setPowerRange] = useState<[number, number]>([0, 0]);
  // Todo :  create custom hook and refactor all the useEffect functions

  const { loading, pokemonData, tableHead } = useFetchData();
  const filteredData = useFilterData(
    pokemonData,
    searchValue,
    powerValue,
    setCurrentPage
  );
  const pokemonDataPerPage = usePaginationData(
    filteredData,
    currentPage,
    itemsPerPage
  );

  // calculate the min and max power per page
  useEffect(() => {
    if (pokemonDataPerPage?.length) {
      const range = calculatePowerRange(pokemonDataPerPage);
      setPowerRange(range);
    } else {
      setPowerRange([0, 0]);
    }
  }, [pokemonDataPerPage]);

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
