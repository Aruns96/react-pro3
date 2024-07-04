import React,{useState,useContext} from 'react'
import { ItemContext } from '../store/ItemProvider';

const MedicineForm = () => {
    
    const[name,setName] = useState("");
    const[description,setDescription] = useState("");
    const[price,setPrice] = useState("")
    const[qty,setQty] = useState(" ")

    const itemCtx = useContext(ItemContext)

    const addMedicineHandler = (e)=>{
      e.preventDefault();
      const data = {
        name:name,
        description:description,
        price:price,
        quantity:qty,
        id:Math.random().toString()
      }
      itemCtx.addItem(data)
      //cartctx.addMedItem(data)
      setName("");
      setDescription("");
      setPrice("");
      setQty("")

    }
    const nameChangeHandler = (e)=>{
       setName(e.target.value)
      
    }
    const descChangeHandler = (e)=>{
        setDescription(e.target.value)
        
    }
    const priceChangeHandler = (e)=>{
         setPrice(e.target.value)
         
    }
    const qtyChangeHandler = (e)=>{
        setQty(e.target.value)
        
   }
  return (
    <form>
    <label>Medicine Name</label>
    <input type='text' value={name} onChange={nameChangeHandler}/>
    <label>Description</label>
    <input type='text' value={description} onChange={descChangeHandler}/>
    <label>Price</label>
    <input type='number'value={price} onChange={priceChangeHandler}/>
    <label>Quantity available</label>
    <input type='number'value={qty} onChange={qtyChangeHandler}/>
    <button onClick={addMedicineHandler}>Add Product</button>
   </form>
  )
}

export default MedicineForm
