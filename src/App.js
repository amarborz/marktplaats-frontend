<<<<<<< HEAD
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
=======
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavbarHeader from './components/Navbar/NavbarHeader'

import {
	HomePage,
	AccountPage,
	ProductsPage,
	ProductPage,
	OrdersPage,
	WishlistPage,
	ShoppingCartPage,
	NewProductPage,
	CreditCardPage,
} from './pages'

function App() {
	return (
		<div className="App">
			<NavbarHeader />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/account" element={<AccountPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/products/:url" element={<ProductsPage />} />
				<Route path="/product/:productId" element={<ProductPage />} />
				<Route path="/orders" element={<OrdersPage />} />
				<Route path="/wishlist" element={<WishlistPage />} />
				<Route path="/shoppingcart" element={<ShoppingCartPage />} />
				<Route path="/newproduct" element={<NewProductPage />} />
				<Route path="/payment" element={<CreditCardPage />} />
			</Routes>
		</div>
	)
>>>>>>> main
}

export default App;
