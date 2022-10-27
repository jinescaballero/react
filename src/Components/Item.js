import React from 'react'
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";


const Item = ({product})=>{
    return(
        <>
            <div style={ styles.card}> 
                <img style={ styles.img} src={product?.img} alt="" />
                <div style={styles.centrar}>
                    <h3 style={styles.h3} >{product?.name}</h3>
                    <h3 style={styles.itemCard}>${product?.price}</h3>
                    <h4 style={styles.itemCard}>Stock: {product?.stock}</h4>
                    <Link to={`/producto/${product.id}`}>
                    <Button variant="contained" >Ver Detalle</Button>
                </Link>
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
        width: '350px',
        heigth:'350px',
        border: '3px solid rgb(211,211,211)',
        borderRadius:5
    },

    img:{
        display: 'flex',
        justifyContent: 'center',
        alignitems:'center',
        height:'250px',
        marginLeft:'auto',
        marginRight:'auto'
        
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


export  {Item}  