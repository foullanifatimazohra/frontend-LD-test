import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Pokemons } from "./pages/pokemons/Pokemons";
import { PokemonProvider } from "./contexts/PokemonContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokemons />,
  },
]);

function App() {
  return (
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  );
}

export default App;
