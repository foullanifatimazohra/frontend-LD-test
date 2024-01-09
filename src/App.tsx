import TextField from "./components/text-field/TextField";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <>
      <TextField
        placeholder="Search..."
        icon={<SearchIcon />}
        error="display error text"
      />
    </>
  );
}

export default App;
