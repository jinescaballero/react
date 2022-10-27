import React, { useEffect, useState } from "react";
// import { products } from "../products";
import LinearProgress from '@mui/material/LinearProgress';
import { ItemList } from "../Components/ItemList";
import {useParams} from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

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
    const [error, setError] = useState(false);

    useEffect(() => {
       //Firebase
        let productosCollection = collection(db, 'products');
        if(IdCategoria){
            productosCollection = query(productosCollection, where('categoria', '==', IdCategoria))
        }
        getDocs(productosCollection)
        .then((data)=>{
            const listaProductos = data.docs.map((producto)=>{
                return {
                    ...producto.data(),
                    id: producto.id
                }
            })
            setListproducts(listaProductos)
        })
        .catch(()=>{
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
        }
            
        ) 
    }, [IdCategoria]);

return(
    <>
        <h2>{greeting}</h2>
        {loading ?
        <LinearProgress color="inherit"/>
        : error ?
        <h2>Ocurrio un error!</h2>
        : <ItemList listProducts={listProducts}/>
        }
    </> 
)

}

export default ItemListContainer