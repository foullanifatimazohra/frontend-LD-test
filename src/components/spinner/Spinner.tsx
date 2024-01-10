import DataUsageIcon from "@mui/icons-material/DataUsage";
import { indigo } from "@mui/material/colors";

interface SpinnerProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Spinner = ({ width, height, color }: SpinnerProps) => {
  return (
    <DataUsageIcon
      sx={{
        width: width ?? "40px",
        height: height ?? "40px",
        fill: color ?? indigo[500],
      }}
    />
  );
};
