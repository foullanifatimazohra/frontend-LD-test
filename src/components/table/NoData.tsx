import NoDataImage from "../../assets/svg/no_data.svg";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export const NoData: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="10px"
      justifyContent="center"
      minHeight="20rem"
      data-testid="no-data"
    >
      <img src={NoDataImage} alt="No data found" width={200} height={200} />
      <Typography sx={{ textAlign: "center" }}>
        There is no data at the moment
      </Typography>
    </Box>
  );
};
