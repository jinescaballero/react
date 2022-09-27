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
/*   console.log(`products.${IdCategoria}`);
  console.log(`products/${IdCategoria}`);
  console.log(products => products.IdCategoria === IdCategoria); */
/*   console.log(products.categoria === IdCategoria); */
  /* console.log(products === IdCategoria); */
 /*  console.log(`products${IdCategoria}`); */
/*   console.log(`products:${IdCategoria}`); */
console.log(`products.${IdCategoria}`);


    const [listProducts, setListproducts] = useState([true])
    const [loading, setLoading] = useState({});
    useEffect(() => {
      const url = IdCategoria ? `products.${IdCategoria}`: products;    
        customFetch (url) 
        .then (res=> 
          {
            setLoading(false)
            setListproducts(res)
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