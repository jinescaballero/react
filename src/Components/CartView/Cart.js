import React from "react";
import "./Cart.css";
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
                
                <Link to="/">
                    <Button variant="contained">Ir A Comprar</Button>
                </Link> 
            </div>
        </>
    );
}
return (
    <>
        <Link to="/">
        <Button variant="contained">Añadir mas Productos</Button>
        </Link>
        {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
))}
<h2>Total a abonar: {totalPrice()}</h2>
    </>
);
};


const styles ={
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop: '220',
        padding: '1%',
        margin: '1%',
        fontSize: '130%',
        border: '2px solid 72a0c1'
    
}
}
export default Cart;