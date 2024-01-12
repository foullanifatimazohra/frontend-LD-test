import { useState } from "react";
import { Paper, Grid, Container } from "@mui/material";
import { PowerRange } from "./PowerRange";
import TextField from "../../components/text-field/TextField";
//hooks
import useFetchData from "../../hooks/useFetchData";
import useFilterData from "../../hooks/useFilterData";
import usePaginationData from "../../hooks/usePaginationData";
import useCalculatePowerRange from "../../hooks/useCalculatePowerRange";
//icons
import WindPowerIcon from "@mui/icons-material/WindPower";
import SearchIcon from "@mui/icons-material/Search";
import { PokemonsList } from "./PokemonsList";

export const Pokemons = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [searchValue, setSearchValue] = useState<string>("");
  const [powerValue, setPowerValue] = useState<number>(0);
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
      <PokemonsList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        loading={loading}
        tableHead={tableHead!}
        filteredData={filteredData!}
        pokemonDataPerPage={pokemonDataPerPage!}
      />
    </Container>
  );
};
