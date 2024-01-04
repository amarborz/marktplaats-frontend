import React from 'react'

import CategoryCard from '../CategoryCard/CategoryCard'

import { CardGroup, Container } from 'react-bootstrap'

import electronics from '../../utils/images/electronics.png'
import books from '../../utils/images/books.webp'
import clothes from '../../utils/images/clothes.jpg'
import sports from '../../utils/images/sport.jpg'
import furniture from '../../utils/images/furniture.jpg'
import games from '../../utils/images/games.png'

const categories = [
	{ name: 'Electronics', image: electronics },
	{ name: 'Clothing', image: clothes },
	{ name: 'Books', image: books },
	{ name: 'Sports', image: sports },
	{ name: 'Furniture', image: furniture },
	{ name: 'Games', image: games },
]

const HomeCategories = () => {
	return (
		<Container
			style={{ marginTop: '60px', textAlign: 'center' }}
			className="d-flex flex-column align-items-center"
		>
			<h4>Popular Categories:</h4>
			<CardGroup
				className="mx-5 justify-content-center"
				style={{ maxWidth: 850 }}
			>
				{categories.map((category) => {
					return <CategoryCard data={category} key={category.name} />
				})}
			</CardGroup>
		</Container>
	)
}

export default HomeCategories
