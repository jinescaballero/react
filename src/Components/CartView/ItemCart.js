import React from "react";
import { useCartContext } from "../../Context/CartContext";
import styled from "styled-components"; 
import Button from '@mui/material/Button';

export const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext();

return (
    <>
        <ItemClass> 
            <div className="item">
                <img width= '100' src={product.img} alt="" />
                <p>Producto: {product.name}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio unitario: $ {product.price}</p>
                <p>Subtotal: ${product.cantidad * product.price}</p>
                <Button onClick={() => removeItem(product.id)} variant="outlined" >Eliminar Producto</Button>
            </div>
        </ItemClass> 
    </>
);
};

const ItemClass = styled.div`
.div {
    display: flex;
    flex-direction: column;
    background-color: 'lightgrey';
    justify-content: center;
    padding: 20px;
    width:300px;
    border-radius: 20px;
} 
.item {
    display: flex;
    height: auto;
    width: 250px;
    transition: transform 0.2s;
    background-color: rgb(220, 220, 220);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 20px;
    filter: drop-shadow(5px 5px 5px gray);
    margin: 15px;
    padding: 20px;
    text-align: center;
}
.item:hover {
    transform: scale(1.2, 1.2);
    transition: transform 0.2s;
}
.item img {
    display: flex;
    width: 220px;
    height: 220px;
    border-radius: 20px;
}
.item button:hover {
    transform: scale(1.1, 1.1);
    transition: transform 0.2s;
}
.button {
    font-size: 17px;
    height: 25px;
    font-weight: bold;
}
p {
    margin: 10px;
}
`; 