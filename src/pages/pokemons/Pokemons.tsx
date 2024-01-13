import { Paper, Grid, Container } from "@mui/material";
import { PowerRange } from "./PowerRange";
import TextField from "../../components/text-field/TextField";
//icons
import WindPowerIcon from "@mui/icons-material/WindPower";
import SearchIcon from "@mui/icons-material/Search";
import { PokemonsList } from "./PokemonsList";
import { usePokemonContext } from "../../contexts/PokemonContext";

export const Pokemons = () => {
  const { searchValue, setSearchValue, powerValue, setPowerValue } =
    usePokemonContext();

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

        <PowerRange />
      </Paper>
      <PokemonsList />
    </Container>
  );
};
