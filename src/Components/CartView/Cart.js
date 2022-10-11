import React from "react";
import "./Cart.css";
import emptycart from "../../assets/carritovacio.png";
import { useCartContext } from "../../Context/CartContext";
import { ItemCart } from "./ItemCart.js";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export const Cart = () => {
    const { cart, totalPrice } = useCartContext();

if (cart.length === 0) {
    return (
        <>
            <div style={styles.container}> 
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
        <Link to="/">
        <Button variant="contained">Añadir mas Productos</Button>
        </Link>
        {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
        ))}
        <h2>Total a abonar: {totalPrice()}</h2>
    </div>
    </>
);
};


const styles ={
    container:{
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
        width: '500px',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop: '240px',
        padding: '1%',
        margin: '1%',
        fontSize: '130%',
        borderRadius:10,
        border: '2px solid #6c757d'
}
}