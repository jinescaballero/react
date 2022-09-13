import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'

const ItemCount =({stock,initial,onAdd}) => {

    const [contador,setContador]=useState(1);
    const sumar =() => {
        (stock - contador) >0  ?  setContador(contador+1) : Swal.fire("No hay mas stock");

    }

    const restar =() => {
        (contador) > 0  ?  setContador(contador-1) : Swal.fire("No hay items");

    }
    const agregar =() => {
        onAdd(contador);

    } 

    return (
    <> 
        <div style={ styles.card}> 
            <h3>Pañales</h3> 
            <div style={styles.itemCard}>
                <button onClick={restar}><Button variant="contained"size="large">-</Button> </button>
                <h3 style={styles.Symbol}> {contador}</h3>
                <button onClick={sumar}><Button variant="contained" size="large">+</Button></button>
                
                
            </div>
            <div style={styles.itemCard}>
                <Button variant="contained" onClick={agregar}> <h4>Añadir al Carrito </h4>
                <button onClick={agregar}>
                    <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                    </IconButton></button></Button>
            </div>
            <p style={styles.cardText}>(Stock: {stock})</p>
        </div>
    </>
    
    )
        
    }

    const styles ={
        card:{
            display: 'block',
            alignItems:'center',
            justifyContent: 'center',
            padding: '1%',
            margin:'1%',
            fontSize: '150%',
            width: '300px',
            border: '2px solid black',
            borderRadius:10
        },
        cardText:{
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center'
        },
        itemCard:{
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center'
        },
        Symbol: {
            padding: '6%',
        },
        
    }

export default ItemCount