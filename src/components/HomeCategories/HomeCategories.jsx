import React from 'react'

import CategoryCard from '../CategoryCard/CategoryCard'

import { CardGroup } from 'react-bootstrap'

import electronics from '../../utils/images/electronics.webp'
import books from '../../utils/images/books.webp'
import clothes from '../../utils/images/clothes.webp'

const categories = [
	{ name: 'Electronics', image: electronics },
	{ name: 'Clothes', image: clothes },
	{ name: 'Books', image: books },
]

const HomeCategories = () => {
	return (
		<div style={{ marginTop: '60px', textAlign: 'center' }}>
			<h4>Popular Categories:</h4>
			<CardGroup className="mx-5 justify-content-center">
				{categories.map((category) => {
					return <CategoryCard data={category} key={category.name} />
				})}
			</CardGroup>
		</div>
	)
}

export default HomeCategories
