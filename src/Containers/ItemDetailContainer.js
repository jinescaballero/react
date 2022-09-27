import React, { useEffect, useState } from "react";
import { products } from "../products"; 
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
import {ItemDetail}  from "../Components/ItemDetail"; 

export const customFetch =(products,id)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const product = products.find((product) => product.id === id)
            resolve(product)
        },2000) 
})
} 

const ItemDetailContainer = ({greeting}) =>{
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    let {IdProducto} = useParams();

    useEffect(()=>{
        customFetch(products, parseInt(IdProducto))
            .then(resolve=> 
            {
                setLoading (false)
                setProducto(resolve);

            })
    },[IdProducto]);


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