import { lazy } from "react";

//component
import { Table } from "../../components/table/Table";
import { PaginationBar } from "../../components/table/PaginationBar";
import { PokemonType } from "../../types/Pokemon";
const NoData = lazy(() =>
  import("../../components/table/NoData").then(({ NoData }) => ({
    default: NoData,
  }))
);

interface PokemonListProps {
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (value: number) => void;
  setItemsPerPage: (value: number) => void;
  pokemonDataPerPage: PokemonType[];
  loading: boolean;
  tableHead: string[];
  filteredData: PokemonType[];
}

export const PokemonsList = ({
  currentPage,
  itemsPerPage,
  setCurrentPage,
  setItemsPerPage,
  pokemonDataPerPage,
  loading,
  tableHead,
  filteredData,
}: PokemonListProps) => {
  return !loading && pokemonDataPerPage?.length ? (
    <>
      <Table data={pokemonDataPerPage!} head={tableHead} loading={loading} />
      <PaginationBar
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        count={filteredData?.length!}
        setCurrentPage={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
      />
    </>
  ) : (
    <NoData />
  );
};
