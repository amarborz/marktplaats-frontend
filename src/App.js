import './App.css'
import NavbarHeader from './components/Navbar/NavbarHeader'
import HomePagina from './pages/HomePagina'

function App() {
	return (
		<div className="App">
			<NavbarHeader />
			<h1>Marktplaats</h1>
			<HomePagina />
		</div>
	)
}

export default App
