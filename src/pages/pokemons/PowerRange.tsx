import { Box, Typography } from "@mui/material";
interface PowerRangeType {
  powerRange: [number, number];
}

export const PowerRange = ({ powerRange }: PowerRangeType) => {
  return (
    <Box display="flex" flexDirection="column" gap="10px">
      <Typography>Min Power : {powerRange[0]}</Typography>
      <Typography>Max Power : {powerRange[1]}</Typography>
    </Box>
  );
};
