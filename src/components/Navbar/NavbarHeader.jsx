import { Button, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../utils/images/logo.png'

const NavbarHeader = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container className="d-flex justify-content-center">
				<Navbar.Brand href="#">
					<img src={logo} alt="Logo" style={{ width: '80px' }} />
				</Navbar.Brand>
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
						<Nav.Link href="#action1">Account</Nav.Link>
						<Nav.Link href="#action2">Wishlist</Nav.Link>
						<Nav.Link href="#">Shopping Cart</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarHeader
