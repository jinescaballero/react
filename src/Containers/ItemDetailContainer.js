import React, { useEffect, useState } from "react";
/* import { products } from "./products"; */
import LinearProgress from '@mui/material/LinearProgress';
import {ItemDetail}  from "../Components/ItemDetail"; 

/* export const customFetch =(products)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products)
        },2000) 
})
} */

const ItemDetailContainer = ({greeting}) =>{
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getItem = async () => {
            try{
                const respuesta = await fetch ('https://fakestoreapi.com/products/8');
                const data = await respuesta.json()
                setProducto(data);
            }
            catch{
            console.err("un error");
            }
            finally {
                setLoading(false)
            }
        }

        getItem();
},[])

    return(
        <>
            <h2>{greeting}</h2>
            {loading ?
            <LinearProgress color="inherit"/> :<ItemDetail producto={producto} />
            }
        </> 
    )
}


export default ItemDetailContainer