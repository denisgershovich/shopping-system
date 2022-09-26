import { Navbar as BootstrapNav, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Cart from './Cart'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Navbar = () => {
    const {
        itemsQuantity,
    } = useShoppingCart()

    return <BootstrapNav sticky='top' className='navbar-dark bg-dark shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to={'/'} as={NavLink}  >
                    Home
                </Nav.Link>
                <Nav.Link to={'/store'} as={NavLink}  >
                    Store
                </Nav.Link>
                <Nav.Link to={'/about'} as={NavLink}  >
                    About
                </Nav.Link>
            </Nav>
            {!!itemsQuantity() && <Cart />}
        </Container>
    </BootstrapNav>
}

export default Navbar