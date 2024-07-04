import React ,{useContext,useState} from 'react';
import { ItemContext } from '../store/ItemProvider';
import { CartContext } from '../store/CartProvider';

const MedicineListItem = (props) => {
    const itemCtx = useContext(ItemContext)
      //console.log("meditems",itemCtx.Items)
      const cartCtx = useContext(CartContext)
      //console.log("cartItems",cartCtx.cartItems)
      const [qnty,SetQnty] = useState(props.data.quantity)
  return (
   
    <li>
        
        {props.data.name}-{props.data.description}-{props.data.price}-{<input type='number' value={qnty} />}
        <button disabled={qnty<1} onClick={()=>{
            
            cartCtx.addItemToCart(props.data)
            SetQnty(Number(qnty)-1)
        }}>{(qnty>=1) ? "Add to cart" : "Out of stock"}</button>
    </li>
  )
}

export default MedicineListItem