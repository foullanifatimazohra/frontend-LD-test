import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Pokemons } from "./pages/pokemons/Pokemons";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokemons />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
