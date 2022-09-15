import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'


const Item = ({product})=>{
    return(
        <>
        <div style={ styles.card}> 
            <h2 >{product?.name}</h2>
            <img width='200' height='200' src={product?.img} alt="" />
            <div  style={styles.itemCard}>
                <h3 style={styles.cardText}>Precio: {product?.price}</h3>
                <h3 style={styles.cardText}>Stock: {product?.stock}</h3>
            </div>
        </div>
        </>
    )
}
const styles ={
    card:{
        display: 'grid',
        alignItems:'center',
        justifyContent: 'center',
        margin:'2%',
        fontSize: '150%',
        width: '300px',
        border: '2px solid rgb(178, 210, 255)',
        borderRadius:10
    },
    
    img:{
        display: 'block',
        alignItems:'center',
        justifyContent: 'center'
    },
    cardText:{
        display: 'block',
        alignItems:'center',
        justifyContent: 'center',
        margin:'1%',
        padding: '2%',

    },
    itemCard:{
        background: 'rgb(226, 240, 251)',
        borderRadius:10
    },
    Symbol: {
        padding: '6%',
    },
    
}


export  {Item}  