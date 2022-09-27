import React from 'react'
import Button from '@mui/material/Button';



const ItemDetail = ({producto})=>{
    return(
        <>
        <div style={ styles.card}> 
        <img width='600' height='600' src={producto.img} alt="" />
                <div style={styles.centrar}>
                    <h3 style={styles.h3} >{producto.name}</h3>
                    <h3 style={styles.itemCard}>Precio:${producto.price}</h3>
                    <p > {producto.description}</p>  
                    <Button variant="contained">Add to Cart</Button>
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
        width: '1100px',
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
        width: '400px',
        borderRadius:5
    },
    centrar:{

        textAlign:'center',
        background: 'rgb(226, 240, 251)'
    },
    Symbol: {
        padding: '6%',
    },
    
}


export {ItemDetail}