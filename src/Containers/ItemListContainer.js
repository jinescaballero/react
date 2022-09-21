import React, { useEffect, useState } from "react";
import { products } from "../Components/products";
import LinearProgress from '@mui/material/LinearProgress';
import { ItemList } from "../Components/ItemList";


export const customFetch =(products)=>{
  return new Promise((resolve, reject) => {
      setTimeout(()=>{
          resolve(products)
      },2000)
      
  })

}

const ItemListContainer = ({greeting}) =>{
    const [listProducts, setListproducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      customFetch(products)
          .then(res=> 
          {
              setLoading (false)
              setListproducts(res)
          })
  },[listProducts])

  
  return(
    <>
      <h2>{greeting}</h2>
      {loading ?
    <LinearProgress color="inherit"/> : <ItemList listProducts={listProducts}/>
    }
    </> 
)

}

export default ItemListContainer