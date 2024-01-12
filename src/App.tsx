import TextField from "./components/text-field/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import { Table } from "./components/table/Table";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";

import WindPowerIcon from "@mui/icons-material/WindPower";
import { PaginationBar } from "./components/table/PaginationBar";

import { Container } from "@mui/material";
import useFetchData from "./hooks/useFetchData";
import useFilterData from "./hooks/useFilterData";
import usePaginationData from "./hooks/usePaginationData";
import useCalculatePowerRange from "./hooks/useCalculatePowerRange";
import { PowerRange } from "./components/power-range/PowerRange";
import { NoData } from "./components/table/NoData";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [powerValue, setPowerValue] = useState<number>(0);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  // Done :  create custom hook and refactor all the useEffect functions

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

  const powerRange = useCalculatePowerRange(pokemonDataPerPage);

  return (
    <Container>
      <Paper
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "12px",
          gap: "20px",
          margin: "40px auto",
        }}
      >
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              placeholder="Search..."
              icon={<SearchIcon />}
              value={searchValue}
              setValue={setSearchValue}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              type="number"
              placeholder="Power threshold"
              icon={<WindPowerIcon />}
              value={powerValue}
              setValue={setPowerValue}
            />
          </Grid>
        </Grid>

        <PowerRange powerRange={powerRange} />
      </Paper>

      {!loading && filteredData?.length ? (
        <>
          <Table
            data={pokemonDataPerPage!}
            head={tableHead}
            loading={loading}
          />
          <PaginationBar
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalPages={filteredData?.length!}
            setCurrentPage={setCurrentPage}
            setItemsPerPage={setItemsPerPage}
          />
        </>
      ) : (
        <NoData />
      )}
    </Container>
  );
}

export default App;
