import React from "react";
import "./Cart.css";
import emptycart from "../../assets/carritovacio.png";
import { useCartContext } from "../../Context/CartContext";
import { ItemCart } from "./ItemCart.js";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


export const Cart = () => {
    const { cart, totalPrice,clear } = useCartContext();


if (cart.length === 0) {
    return (
        <>
            <div style={styles.empty}> 
                <h4>Aun no agregaste productos al carrito </h4>
                <img width='400'  src={emptycart} alt="emptycart" />
                <Link to="/">
                    <Button variant="contained">Ir A Comprar</Button>
                </Link> 
            </div>
        </>
    );
}
return (
    <>
    <div style={styles.carrito}>
        
        {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
        ))}
        <div style={styles.finalContenedor}>
            <Link style={styles.link} to="/">
            <Button width='100px'variant="contained" onClick={() => clear()}>Limpiar carrito</Button>
            </Link>
            <Link style={styles.link} to="/">
            <Button height='300px' width='300px' variant="contained">Añadir Productos</Button>
            </Link>
            <Link style={styles.link} to="/form">
                <Button variant="contained" >Pagar Carrito</Button>
            </Link>
            <div style={styles.total}>Total a abonar: ${totalPrice()}</div>
        </div>
    </div>
    </>
);
};

const styles ={
    empty:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop: '220px',
        padding: '1%',
        margin: '1%',
        fontSize: '130%'
    },
    carrito:{
        display: 'flex',
        width: '800px',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop: '240px',
        padding: '1%',
        margin: '1%',
        fontSize: '130%',
        borderRadius:10,
        border: '2px solid #6c757d'
},
    finalContenedor:{
        display: 'flex',
        alignItems: 'center',
        margin: '5px',
        padding: '1%',
        button: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
    }
},
    total:{
        display: 'inline-block',
        justifyItems: 'center',
        alignItems: 'center',
        flexdirection: 'column',
        fontSize: '30px',
        fontWeight: 'bold',
        paddingLeft:' 20px'
    },
    link:{
        margin:'10px'
    }
}