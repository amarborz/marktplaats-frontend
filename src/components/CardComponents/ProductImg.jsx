import React from 'react'

import { Card, Carousel, CarouselItem, Image } from 'react-bootstrap'

import noImage from '../../utils/images/noimage.jpg'

import styles from './productImg.module.css'

const ProductImg = ({ fotos }) => {
	return (
		<div className={styles.imageContainer}>
			<Carousel slide={false} variant="dark">
				{fotos?.length > 0 ? (
					fotos.map((image, index) => {
						return (
							<CarouselItem key={index}>
								<Image
									src={image}
									alt={image}
									// className="d-block w-100"
									fluid
								/>
							</CarouselItem>
						)
					})
				) : (
					<CarouselItem>
						<Image
							src={noImage}
							alt={noImage}
							className="d-block w-100"
							fluid
						/>
					</CarouselItem>
				)}
			</Carousel>
		</div>
	)
	// return (
	// 	<Card style={{ maxWidth: '50rem' }} className="border-0">
	// 		<Card.Img
	// 			variant="top"
	// 			src={fotos?.length > 0 ? fotos[0] : noImage}
	// 			className="bg-secondary"
	// 		/>
	// 	</Card>
	// )
}

export default ProductImg
