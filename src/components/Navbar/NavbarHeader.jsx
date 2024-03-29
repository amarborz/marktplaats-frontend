import './navbarHeader.css'

import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

import { FaCartShopping, FaHeart, FaUser, FaPlus } from 'react-icons/fa6'

import logo from '../../utils/images/logo.png'

const NavbarHeader = () => {
	let userId = localStorage.getItem('id')
	const navigate = useNavigate()

	const [searchName, setSearchName] = useState('')

	const searchFunction = (e) => {
		e.preventDefault()
		let url = searchName === undefined ? '/products' : `/products/${searchName}`
		navigate(url)
	}

	const logout = () => {
		localStorage.removeItem('name')
		localStorage.removeItem('token')
		localStorage.removeItem('id')
	}

	const options = [
		// { value: 'choose category', label: 'Choose category', isDisabled: true },
		{ value: 'electronics', label: 'Electronics' },
		{ value: 'books', label: 'Books' },
		{ value: 'clothing', label: 'Clothing' },
		{ value: 'furniture', label: 'Furniture' },
		{ value: 'sport', label: 'Sport' },
		{ value: 'games', label: 'Games' },
	]

	const handleSelectChange = (category) => {
		let url = `/products?category=${category.value}`
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
							type="submit"
							onClick={(e) => {
								searchFunction(e)
							}}
						>
							Search
						</Button>
					</Form>
					<Nav className="mr-auto" style={{ maxHeight: '100px' }} navbarScroll>
						<Select options={options} onChange={handleSelectChange} />

						<LinkContainer to="/products">
							<Nav.Link>Browse all products</Nav.Link>
						</LinkContainer>
						{userId && (
							<>
								<LinkContainer to="/newproduct">
									<Nav.Link title="Add a new product">
										<FaPlus className="icons" />
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/account">
									<Nav.Link title="Your Account">
										<FaUser className="icons" />
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/wishlist">
									<Nav.Link title="Your Wishlist">
										<FaHeart className="icons" />
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/shoppingcart">
									<Nav.Link title="Your Shopping Cart">
										<FaCartShopping className="icons" />
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/orders">
									<Nav.Link>Orders</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/login" onClick={logout}>
									<Nav.Link>Logout</Nav.Link>
								</LinkContainer>
							</>
						)}
						{!userId && (
							<LinkContainer to="/login">
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarHeader
