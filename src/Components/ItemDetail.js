import React from 'react'
import Button from '@mui/material/Button';



const ItemDetail = ({producto})=>{
    return(
        <>
        <div style={ styles.card}> 
        <img width='220' height='220' src={producto.image} alt="" />
                <div style={styles.centrar}>
                    <h3 style={styles.h3} >{producto.title}</h3>
                    <h3 style={styles.itemCard}>${producto.price}</h3>
                    <p > {producto.description}</p>  
                    <Button variant="contained">Ver Detalle</Button>
                </div>
                
            </div>
        </>
    )
}
const styles ={
    card:{
        display: 'inline-block',
        margin:'1%',
        padding:'1%',
        fontSize: '150%',
        alignitems: 'center',
        justifycontent: 'center',
        width: '300px',
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
        width: '300px',
        background: 'rgb(226, 240, 251)',
        borderRadius:5
    },
    centrar:{

        textAlign:'center'
    },
    Symbol: {
        padding: '6%',
    },
    
}


export {ItemDetail}