import React, { useEffect, useState } from "react";
import { products } from "./products";
import { ItemList } from "./ItemList";


export const customFetch =(products)=>{
  return new Promise((resolve, reject) => {
      setTimeout(()=>{
          resolve(products)
      },2000)
      
  })

}

const ItemListContainer = ({greeting}) =>{
    const [listProducts, setListproducts] = useState([])
    useEffect(()=>{
      customFetch(products)
          .then(res=> setListproducts(res))
    },[])
    setTimeout(()=>{
      console.log("useEffect");
    },2000);
  
  return(
    <>
      <h2>{greeting}</h2>
      <ItemList listProducts={listProducts}/>
    </> 
)

}

export default ItemListContainer