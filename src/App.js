import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import MedicineForm from './components/MedicineForm';
import MedicineList from './components/MedicineList';
import { ItemProvider } from './store/ItemProvider';
import { CartProvider } from './store/CartProvider';


function App() {
   const [showCart,setShowCart]=useState(false)
   const showCartHandler = ()=>{
    setShowCart(true)
   }
  return (
    <>
      <ItemProvider>
        <CartProvider>
      <button onClick={showCartHandler}>Cart</button>
      {showCart && <Cart />}
      <MedicineForm />
      <MedicineList />
      </CartProvider>
      </ItemProvider>
    </>
  );
}

export default App;
