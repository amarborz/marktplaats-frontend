import './App.css'
import { Header } from './components/Header/Header'

function App() {
	const name = 'Amar'
	const age = 27

	return (
		<div className="App">
			<h1>Marktplaats</h1>
			<Header naam={name} leeftijd={age} />
		</div>
	)
}

export default App
