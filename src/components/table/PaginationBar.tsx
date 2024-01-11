import { TablePagination } from "@mui/material";

interface PaginationBarProps {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  setCurrentPage: (value: number) => void;
  setItemsPerPage: (value: number) => void;
}

export const PaginationBar = ({
  currentPage,
  itemsPerPage,
  totalPages,
  setCurrentPage,
  setItemsPerPage,
}: PaginationBarProps) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };
  return (
    <TablePagination
      component="div"
      count={totalPages}
      page={currentPage}
      onPageChange={handleChangePage}
      rowsPerPage={itemsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
