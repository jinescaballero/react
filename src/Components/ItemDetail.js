import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import "toastify-js/src/toastify.css";

export const ItemDetail = ({producto})=>{

    const [irAlCarrito, setIrAlCarrito] = useState (false); 

    const { addItem } = useCartContext();
    const onAdd = (cantidad) => {
        setIrAlCarrito(true);
        addItem(producto, cantidad);
    };

    return(
        <>
        <div style={ styles.card}> 
        <img width='400px' height='400px' src={producto.img} alt="" />
                <div style={styles.centrar}>
                    <h3 style={styles.h3} >{producto.name}</h3>
                    <p > {producto.description}</p> 
                    <h4 style={styles.itemCard}>Precio: {"$"+producto.price}</h4>
                    {
                        irAlCarrito
                        ? <Link to='/cart'><button>Finalizar Compra</button></Link>
                        :<ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                    } 
                    <h4> Stock: {producto.stock}</h4>
                </div>
                
            </div>
        </>
    )
}
const styles ={
    card:{
        display: 'flex',
        margin:'1%',
        padding:'1%',
        fontSize: '150%',
        alignitems: 'center',
        justifycontent: 'center',
        width: '1200px',
        border: '3px solid rgb(211,211,211)',
        borderRadius:5
    },

    img:{
        display: 'flex',
        justifyContent: 'center',
        alignitems:'center'
        
    },
    cardText:{
        display: 'flex',
        justifyContent: 'center',
        margin:'2%',
        padding: '2%',
    
    },
    h3:{
        display: 'flex',
        justifyContent: 'center',
        fontStyle:'Poppins',
        alignitems: 'center',
        alignText:'center'
    },
    itemCard:{
        display: 'flex',
        margin:'2%',
        justifyContent: 'center',
        width: '600px',
        borderRadius:5
    },
    centrar:{

        textAlign:'center',
        background: 'rgb(226, 240, 251)'
    }
}


export default ItemDetail