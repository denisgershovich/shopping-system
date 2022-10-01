import { Container, Navbar as BootstrapNav, Nav, Button } from 'react-bootstrap'
import Cart from './Cart'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Navbar = () => {
    const {
        itemsQuantity,
    } = useShoppingCart()

    return <BootstrapNav sticky='top' className='navbar-dark bg-dark shadow-sm mb-3'>
        <Container>
            <Nav
            >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/store"> Store</Nav.Link>
                <Nav.Link href="/signUp" > Sign Up</Nav.Link>
            </Nav>

            <Nav>
                <Nav.Link href="/login" > Login </Nav.Link>
                {!!itemsQuantity() && <Cart />}
            </Nav>
        </Container>
    </BootstrapNav>

    // return <BootstrapNav sticky='top' className='navbar-dark bg-dark shadow-sm mb-3'>
    //     <Container>
    //         <Nav >
    //             <Nav.Link to={'/'} as={NavLink}  >
    //                 Home
    //             </Nav.Link>
    //             <Nav.Link to={'/store'} as={NavLink}  >
    //                 Store
    //             </Nav.Link>
    //             <Nav.Link to={'/signUp'} as={NavLink}  >
    //                 Sign Up
    //             </Nav.Link>
    //             <Nav.Link to={'/signUp'} as={NavLink} className="justify-content-end" >
    //                 Login
    //             </Nav.Link>
    //         </Nav>
    //         
    //     </Container>
    // </BootstrapNav>
}

export default Navbar