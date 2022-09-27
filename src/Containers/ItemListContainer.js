import React, { useEffect, useState } from "react";
import { products } from "../products";
import LinearProgress from '@mui/material/LinearProgress';
import { ItemList } from "../Components/ItemList";
import {useParams} from "react-router-dom";

export const customFetch =(products)=>{
  return new Promise((resolve, reject) => {
      setTimeout(()=>{
          resolve(products)
      },2000)
      
  })

}

const ItemListContainer = ({greeting}) =>{
  let{IdCategoria}=useParams();
    const [listProducts, setListproducts] = useState([])
    const [loading, setLoading] = useState({});
    useEffect(() => {
        customFetch (products) 
        .then (res=> 
          {
            if (IdCategoria) {
              setLoading(false)
              setListproducts(res.filter(products=>products.categoria === IdCategoria))
            } else{
              setLoading(false)
              setListproducts(res)
            }
            
            
          })
    }, [IdCategoria]);

  
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