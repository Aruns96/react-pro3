import React,{useContext} from 'react'
import { CartContext } from '../store/CartProvider';
import CartItem from './CartItem';

const Cart = () => {
    const cartCtx = useContext(CartContext);
   
    const cartItems = (
      <ul >
        {cartCtx.cartItems.map((item) => {
          return  <CartItem
            key={item.id}
           
             data={item}
            
            
          />
        }
          
        )}
      </ul>
    );
  
 
    
  return (
   <div>
     
      {cartItems}
      
      <div >
        <span>Total amount: </span>
        <h3>{cartCtx.calculateTotalPrice().toFixed(2)}</h3> 
      </div>
      <div >
        
       
      </div>
    
   </div>
  )
}

export default Cart