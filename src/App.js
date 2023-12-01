import "./App.css";
import ProductGrid from "./components/Grids/ProductGrid";
import NavbarHeader from "./components/Navbar/NavbarHeader";
import HomePagina from "./pages/HomePagina";
import ProductPagina from "./pages/ProductPagina";

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <h1>Marktplaats</h1>
      <ProductPagina />
    </div>
  );
}

export default App;
