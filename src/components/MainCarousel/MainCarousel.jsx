import React from 'react'

import { Carousel, Container } from 'react-bootstrap'
import './mainCarousel.css'

import electronics from '../../utils/images/electronics1.png'
import books from '../../utils/images/books1.webp'
import clothes from '../../utils/images/clothes1.jpg'
import sports from '../../utils/images/sport1.jpg'
import furniture from '../../utils/images/furniture1.jpg'
import games from '../../utils/images/games1.png'
import { useNavigate } from 'react-router-dom'

const carouselData = [
	{ name: 'Games', description: 'Play, play, play!', image: games },
	{
		name: 'Electronics',
		description: 'Buy the newest gadgets!',
		image: electronics,
	},
	{ name: 'Books', description: 'Read the newest books!', image: books },
	{ name: 'Clothing', description: 'Buy stylish clothes!', image: clothes },
	{ name: 'Sports', description: 'Ready for sport!', image: sports },
	{ name: 'Furniture', description: 'Decorate your home!', image: furniture },
]

const MainCarousel = () => {
	const navigate = useNavigate()

	const handleCategoryClick = (category) => {
		let url = `/products?category=${category}`
		navigate(url)
	}

	return (
		<Container className="w-50 d-flex justify-content-center mt-5">
			<Carousel data-bs-theme="white" className="mt-5">
				{carouselData.map((data) => {
					return (
						<Carousel.Item key={data.name}>
							<img
								className="d-block w-100 rounded"
								src={data.image}
								alt={data.name}
								style={{
									height: 500,
									objectFit: 'cover',
									filter: 'brightness(50%)',
									cursor: 'pointer',
								}}
								onClick={() => {
									handleCategoryClick(data.name.toLowerCase())
								}}
							/>
							<Carousel.Caption>
								<h3>{data.name}</h3>
								<p>{data.description}</p>
							</Carousel.Caption>
						</Carousel.Item>
					)
				})}
			</Carousel>
		</Container>
	)
}

export default MainCarousel
