import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import electronics from '../../utils/images/electronics.webp'
import books from '../../utils/images/books.webp'
import clothes from '../../utils/images/clothes.webp'

const carouselData = [
	{ name: 'Electronics', description: 'Text', image: electronics },
	{ name: 'Books', description: 'Text', image: books },
	{ name: 'Clothes', description: 'Text', image: clothes },
]

const MainCarousel = () => {
	return (
		<Container className="w-50 d-flex justify-content-center">
			<Carousel data-bs-theme="white" className="mt-5">
				{carouselData.map((data) => {
					return (
						<Carousel.Item>
							<img
								className="d-block w-100 rounded"
								src={data.image}
								alt={data.name}
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
