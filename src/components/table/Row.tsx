import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { PokemonType } from "../../types/Pokemon";

export const Row = ({
  id,
  name,
  type,
  hp,
  attack,
  defense,
  special_attack,
  special_defense,
  speed,
}: PokemonType) => {
  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{type.join(",")}</TableCell>
      <TableCell align="center">{hp}</TableCell>
      <TableCell align="center">{attack}</TableCell>
      <TableCell align="center">{defense}</TableCell>
      <TableCell align="center">{special_attack}</TableCell>
      <TableCell align="center">{special_defense}</TableCell>
      <TableCell align="center">{speed}</TableCell>
    </TableRow>
  );
};
