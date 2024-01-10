import TextField from "./components/text-field/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { NoData } from "./components/table/NoData";
import { Table } from "./components/table/Table";
import { Spinner } from "./components/spinner/Spinner";
import { useEffect } from "react";

import { getPokemonData } from "./services/PokemonService";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  useEffect(() => {
    async () => {
      const data = await getPokemonData();
      console.log(data);
    };
  }, []);

  return (
    <>
      <TextField
        placeholder="Search..."
        icon={<SearchIcon />}
        value={searchValue}
        setValue={setSearchValue}
      />
      <NoData />
      <Table />
      <Spinner />
    </>
  );
}

export default App;
