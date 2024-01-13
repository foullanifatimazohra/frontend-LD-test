import { lazy } from "react";
import { usePokemonContext } from "../../contexts/PokemonContext";
//component
import { Table } from "../../components/table/Table";
import { PaginationBar } from "../../components/table/PaginationBar";
import { Spinner } from "../../components/spinner/Spinner";
const NoData = lazy(() =>
  import("../../components/table/NoData").then(({ NoData }) => ({
    default: NoData,
  }))
);

export const PokemonsList = () => {
  const { currentPage, setCurrentPage, itemsPerPage, setItemsPerPage } =
    usePokemonContext();
  const { filteredData } = usePokemonContext();
  const { loading, tableHead } = usePokemonContext();
  const { pokemonDataPerPage } = usePokemonContext();

  return loading ? (
    <Spinner />
  ) : pokemonDataPerPage?.length ? (
    <>
      <Table data={pokemonDataPerPage!} head={tableHead} />
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
