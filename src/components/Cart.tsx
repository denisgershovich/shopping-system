import { useState } from 'react'
import { Offcanvas, Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from "../context/ShoppingCartContext"
import CartItem from './CartItem'
import { formatCurrency } from '../util/FormatCurrency'
import storeItems from '../data/items.json'

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const Cart = () => {
    const [openCart, setOpenCart] = useState(false)
    const { itemsQuantity, cartItems } = useShoppingCart()
    const handleCartClick = () => {
        setOpenCart(!openCart)
    }

    return <>
        {!openCart && < Button
            style={{
                position: 'relative',
            }
            }
            variant='outline-light'
            className='rounded-circle'
            onClick={handleCartClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16" height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div
                className='rounded-circle bg-danger  '
                style={{
                    position: 'absolute',
                    width: '1.5rem',
                    height: '1.5rem',
                    color: 'white',
                    bottom: 0,
                    right: 0,
                    transform: 'translate(40%,40%)'
                }}
            >
                {itemsQuantity()}
            </div>
        </Button >}
        <Offcanvas show={openCart} onHide={handleCartClick} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems && cartItems.map(item => (
                        <CartItem {...item} key={item.id} />)
                    )}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}

export default Cart