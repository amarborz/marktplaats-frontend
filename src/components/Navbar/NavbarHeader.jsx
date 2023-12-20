import './navbarHeader.css'

import { useState, } from 'react'
import { Button, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from "react-router-dom"

import { FaCartShopping, FaHeart, FaUser, FaPlus } from 'react-icons/fa6'

import logo from '../../utils/images/logo.png'

const NavbarHeader = () => {

	const navigate = useNavigate();

	const [searchName, setSearchName] = useState('')
	// const [searchType, setSearchType] = useState()

	const searchFunction = () => {
		
		let url = (searchName === undefined ? '/products' : `/products/${searchName}`)
		console.log("moving to", `/products/${searchName}`)
		navigate(url)
	}

	return (
		<Navbar expand="lg" className="bg-body-tertiary fixed-top">
			<Container className="d-flex justify-content-center">
				<LinkContainer to="/">
					<Navbar.Brand href="#">
						<img src={logo} alt="Logo" style={{ width: '80px' }} />
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search for..."
							className=""
							aria-label="Search"
							onChange={(e) => setSearchName(e.target.value)}
							value={searchName}
						/>
						<Button
							variant="outline-primary"
							onClick={searchFunction}>
							Search
						</Button>
					</Form>
					<Nav className="mr-auto" style={{ maxHeight: '100px' }} navbarScroll>
						<LinkContainer to="/products">
							<Nav.Link>Browse all products</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/newproduct">
							<Nav.Link>
								<FaPlus className="icons" />
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/account">
							<Nav.Link>
								<FaUser className="icons" />
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/wishlist">
							<Nav.Link>
								<FaHeart className="icons" />
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/shoppingcart">
							<Nav.Link>
								<FaCartShopping className="icons" />
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/orders">
							<Nav.Link>
								Orders
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarHeader
