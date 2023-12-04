import { Button, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../utils/images/logo.png'
import { LinkContainer } from 'react-router-bootstrap'

const NavbarHeader = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
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
						/>
						<Button variant="outline-primary">Search</Button>
					</Form>
					<Nav className="mr-auto" style={{ maxHeight: '100px' }} navbarScroll>
						<LinkContainer to="/account">
							<Nav.Link>Account</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/wishlist">
							<Nav.Link>Wishlist</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/shoppingcart">
							<Nav.Link>Shopping Cart</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarHeader
