import TextField from "./components/text-field/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { NoData } from "./components/table/NoData";
import { Table } from "./components/table/Table";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

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
    </>
  );
}

export default App;
