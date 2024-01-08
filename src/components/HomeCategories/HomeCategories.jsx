import React from 'react'

import CategoryCard from '../CategoryCard/CategoryCard'

import { CardGroup, Container } from 'react-bootstrap'

import electronics from '../../utils/images/electronics1.png'
import books from '../../utils/images/books1.webp'
import clothes from '../../utils/images/clothes1.jpg'
import sports from '../../utils/images/sport1.jpg'
import furniture from '../../utils/images/furniture1.jpg'
import games from '../../utils/images/games1.png'

const categories = [
	{ name: 'Electronics', image: electronics },
	{ name: 'Clothing', image: clothes },
	{ name: 'Books', image: books },
	{ name: 'Sport', image: sports },
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
