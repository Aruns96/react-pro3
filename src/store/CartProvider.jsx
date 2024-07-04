import React, { createContext, useState,useEffect } from 'react';

const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  calculateTotalPrice: () => 0,
  removeItemFromCart: () => {},
 
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    const getData=async()=>{
      try{
          const response=await fetch(`https://react-http-b0681-default-rtdb.firebaseio.com/cart.json`)
          const data=await response.json()
          const lastCart=Object.keys(data).pop()
          
          setCartItems(data[lastCart])
      }
      catch(err){
          console.log(err)
      }
  }
  getData()
  },[])


  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch(
          "https://react-http-b0681-default-rtdb.firebaseio.com/cart.json",
          {
            method: "POST",
            body: JSON.stringify(cartItems),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
       
      } catch (err) {
        console.log(err);
      }
    };
    postData()
  },[cartItems]);
  
  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart,calculateTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };