import React from 'react'
import { ChevronDown, ChevronUp } from '../../icons'
import { useDispatch, useSelector } from 'react-redux'

import { removeItem, increase, decrease, } from '../../features/cart/cart.slice'

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()



  

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className='item-price'> ${price}   </h4>
        <button onClick={()=> dispatch(removeItem(id))} className='btn remove-btn'>
          remove
        </button>
      </div>

      <div>
        <button onClick={()=> dispatch(increase(id))} className='amount-btn'>
          <ChevronUp />
        </button>

        <p className='amount'>{amount}</p>

        <button 
          className='amount-btn'

        // onClick={()=>  {
        //   if ( amount ===1 ) {
        //     dispatch(removeItem(id));
        //     return;
        //   }
          
        //   dispatch(decrease({ id }))
        // }}
        // onClick={()=>  {
        //   if ( amount > 0 ) {
        //     dispatch(decrease({ id }));
        //     // return;
        //   }
          
        // }}
        onClick={()=> dispatch(decrease({ id }))}
          >
          <ChevronDown />
        </button>
      </div>

    </article>
  )
}

export default CartItem