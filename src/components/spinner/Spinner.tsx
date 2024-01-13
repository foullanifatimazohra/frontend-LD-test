import { Box, CircularProgress } from "@mui/material";
import { indigo } from "@mui/material/colors";

interface SpinnerProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Spinner = ({ width, height, color }: SpinnerProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="20rem"
      data-testid="spinner"
    >
      <CircularProgress
        sx={{
          width: width ?? "40px",
          height: height ?? "40px",
          color: color ?? indigo[500],
        }}
      />
    </Box>
  );
};
