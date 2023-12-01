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
    <div className={`${classes.ProductGrid}`}>
    <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
    <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
    <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>
  </div>
  <div className={`${classes.grid} ${classes.littleSpace}`}>  
    <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Modular" btnTitle="Show me More"/>
    <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Multi-Platform" btnTitle="Show me More"/>
    <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
  </div>
  );
}

export default App;
