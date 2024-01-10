import { Table as MUITable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import { Row } from "./Row";
import { PokemonType } from "../../types/Pokemon";

export const Table = ({ data, head }: { data: PokemonType[]; head?: any }) => {
  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#F5F7F8" }}>
          <TableRow>
            {head.map((headData: string, i: number) => (
              <TableCell key={i} align="center">
                {headData}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((rowData, i) => {
            return <Row key={i} {...rowData}></Row>;
          })}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};
