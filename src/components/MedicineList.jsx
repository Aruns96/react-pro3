import React,{useContext} from "react";
import { ItemContext } from "../store/ItemProvider";
import MedicineListItem from "./MedicineListItem";

const MedicineList = () => {
 const itemCtx = useContext(ItemContext);
 
  return (
    <div>
      <ul>
       
        {itemCtx.Items.map((item) => (
          <MedicineListItem
            key={Math.random().toString()}
           data={item}
        
          />
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;