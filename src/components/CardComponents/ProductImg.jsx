import React from 'react'

import { Card, Carousel, CarouselItem } from 'react-bootstrap'

import laptop from '../../utils/images/laptop.jpg'

import styles from './productImg.module.css'

const ProductImg = ({ fotos }) => {
	return (
		<div className={styles.imageContainer}>
			<Carousel slide={false} variant="dark">
				{fotos?.length > 0 ? (
					fotos.map((image) => {
						return (
							<CarouselItem key={image}>
								<img src={image} alt={image} className="d-block w-100" />
							</CarouselItem>
						)
					})
				) : (
					<CarouselItem>
						<img src={laptop} alt={laptop} className="d-block w-100" />
					</CarouselItem>
				)}
			</Carousel>
		</div>
	)
	// return (
	// 	<Card style={{ maxWidth: '50rem' }} className="border-0">
	// 		<Card.Img
	// 			variant="top"
	// 			src={fotos?.length > 0 ? fotos[0] : laptop}
	// 			className="bg-secondary"
	// 		/>
	// 	</Card>
	// )
}

export default ProductImg
