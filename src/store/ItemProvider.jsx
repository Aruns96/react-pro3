import React, { createContext, useState ,useEffect} from 'react';

const ItemContext = createContext({
  Items: [],
  addItem: () => {},
  
 
});

const ItemProvider = ({ children }) => {
  const [Items, setItems] = useState([]);


  useEffect(()=>{
    const getData=async()=>{
      try{
          const response=await fetch(`https://react-http-b0681-default-rtdb.firebaseio.com/produts.json`)
          const data=await response.json()
          const lastCart=Object.keys(data).pop()
          
          setItems(data[lastCart])
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
          "https://react-http-b0681-default-rtdb.firebaseio.com/produts.json",
          {
            method: "POST",
            body: JSON.stringify(Items),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
       
      } catch (err) {
        console.log(err);
      }
    };
    postData()
  },[Items]);
  const addItem = async(item) => {
    
    setItems([...Items,item])
    
  };

  
  

  return (
    <ItemContext.Provider
      value={{ Items, addItem }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };