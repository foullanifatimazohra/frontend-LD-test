import { Box, Typography } from "@mui/material";
import useCalculatePowerRange from "../../hooks/useCalculatePowerRange";
import { usePokemonContext } from "../../contexts/PokemonContext";

export const PowerRange = () => {
  const { pokemonDataPerPage } = usePokemonContext();
  const powerRange = useCalculatePowerRange(pokemonDataPerPage);
  return (
    <Box display="flex" flexDirection="column" gap="10px">
      <Typography>Min Power : {powerRange[0]}</Typography>
      <Typography>Max Power : {powerRange[1]}</Typography>
    </Box>
  );
};
