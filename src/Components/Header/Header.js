import React from 'react'
import logo from '../../assets/logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Nav} from './Nav/Nav';

const Header =({nombre,apellido,id,children})=>{
const categorias=[
    {id:0,nombre:'Primera Necesidad'},
    {id:1,nombre:'Alimentos'},
    {id:2,nombre:'Ropa'},
    {id:3,nombre:'Dinero'}
]

    return(
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="logo" />
            <h1> Donar Alegria </h1> 
            <h2>Bienvenido {nombre}</h2>
            <Nav categorias={categorias}/>
            <ShoppingCartIcon color="sucess" fontsize="large"/>
        </header>
    )
}


const styles ={
    container:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: '1%',
        margin:'1%',
        fontSize: '130%',
        background: '#e2f0fb',
        border: '2px solid #b2dafa'
    },
    imagen:{
        width:'8%',
        borderRadius:190
    }
    
}

export default Header