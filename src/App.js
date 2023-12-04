import "./App.css";
import NavbarHeader from "./components/Navbar/NavbarHeader";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <ProductPage />
    </div>
  );
}

export default App;
