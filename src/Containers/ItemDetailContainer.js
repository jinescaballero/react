import React, { useEffect, useState } from "react";
// import { products } from "../products"; 
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
import { ItemDetail } from "../Components/ItemDetail"; 
import { db } from "../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

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
    const [error, setError] = useState(false);

    let {IdProducto} = useParams();

    useEffect(()=>{
        // customFetch(products, parseInt(IdProducto))
        //     .then(resolve=> 
        //     {
        //         setLoading (false)
        //         setProducto(resolve);

        //     })
        const productosCollection = collection(db, 'products');
        const refDoc = doc(productosCollection, IdProducto);
        getDoc(refDoc)
        .then((resultado)=>{
            setProducto(
                {
                    id:resultado.id,
                    ...resultado.data(),
                }
            )
        })
        .catch(()=>{
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[IdProducto]);


    return(
        <>
            <h2>{greeting}</h2>
            {loading ?
            <LinearProgress color="inherit"/>
            : error ?
            <h2>Ocurrio un error!</h2>
            :<ItemDetail producto={producto} />
            }
        </> 
    )
}


export default ItemDetailContainer