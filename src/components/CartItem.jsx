import React,{useContext} from 'react'
import { CartContext } from '../store/CartProvider';

const CartItem = (props) => {
    const cartCtx = useContext(CartContext)
    // console.log("cartctxitemsincart",cartCtx.cartItems)
    // console.log("props",props.data)
   
  return (
    <li>
        {props.data.name}-{props.data.description}-{props.data.price}---
        <label>quantity:</label>
        <input
         
          type="number"
         
          value={props.data.quantity}
         
        />
        <span><button onClick={() => cartCtx.removeItemFromCart(props.data.id)}>remove</button></span>
    </li>
  )
}

export default CartItem