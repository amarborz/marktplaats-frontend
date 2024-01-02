import React from 'react'
import design from '../../utils/images/design.png'
import display from '../../utils/images/Display.jpg'
import additional from '../../utils/images/Additional.png'
import battery from '../../utils/images/Battery.jpg'
import graphics from '../../utils/images/graphics.png'
import memory from '../../utils/images/Memory.png'
import operatingsystem from '../../utils/images/Operating System.png'
import storage from '../../utils/images/Storage.png'
import wifi from '../../utils/images/Wifi.png'
import processor from '../../utils/images/Processor.jpg'

import { Card, Container } from 'react-bootstrap'

const ProductDetails = ({ product }) => {
	return (
		<Container className="d-flex justify-content-center mt-5">
			<Card style={{ maxWidth: '50rem' }} className="mt-5">
				<Card.Body className="p">
					<Card.Text>{product.productDescription}</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	)
}

export default ProductDetails
