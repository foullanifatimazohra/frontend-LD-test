import TableCell from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";

export interface RowProps {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

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
}: RowProps) => {
  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{id}</TableCell>
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
