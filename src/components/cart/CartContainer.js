import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CartItem from './CartItem'
import { clearCart, removeItem, myCart } from '../../features/cart/cart.slice'
import { openModal } from '../../features/modal/modal.slice'


const CartContainer = () => {

    // const { cartItems, totalCartItems, totalPrice } = useSelector((state =>
    //     state.cart
    // ))
    const dispatch = useDispatch()
    const { cartItems, totalCartItems, totalPrice } = useSelector(myCart)

    // console.log(cartItems)

    if (totalCartItems < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>your cart</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>

                <div className='cart-total'>
                    <h4>
                        total <span>${totalPrice}</span>
                    </h4>
                </div>

            </section>
        )
    }

    return (
        <section className='cart'>
            <h2>your cart</h2>

            <div>
                {/* <ul> */}
                {cartItems.map((item) => (
                    // <CartItem
                    //     key={item.id} id={item.id} img={item.img} title={item.title}
                    //     price={item.price} amount={item.amount}
                    // />

                    <CartItem key={item.id} {...item} />

                    // <li key={item.id}>
                    //     <button onClick={() => dispatch(removeItem(item.id))}>
                    //         Remove
                    //     </button>

                    //     <p>{item.id}</p>
                    //     <p>{item.title}</p>
                    //     <img src={item.img} alt={item.title} />
                    // </li>

                ))}
                {/* </ul> */}
            </div>

            <footer>
                <hr />

                <div className='cart-total'>
                    <h4>
                        total <span>${totalPrice.toFixed(2)}</span>
                    </h4>
                </div>

                <button className='btn clear-btn'
                     onClick={() => dispatch(openModal())}> 
                    clear cart
                </button>
            </footer>
        </section>
    )

}

export default CartContainer