import React from 'react'
import logo from '../../assets/logo.jpeg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Nav} from './Nav/NavBar';
//import {App} from '../../App.css';

const Header =({nombre})=>{
const categorias=[
    {id:0,nombre:'Primera Necesidad'},
    {id:1,nombre:'Alimentos'},
    {id:2,nombre:'Ropa'},
    {id:3,nombre:'Dinero'}
]

    return(
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="logo" />
            <h2>Bienvenid@ {nombre}!</h2>
            <Nav categorias={categorias}/>
            <ShoppingCartIcon color="sucess" fontsize="large"/>
        </header>
    )
}


const styles ={
    container:{
        fontFamily: 'StyleScript',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: '1%',
        margin:'1%',
        fontSize: '130%',
        background: '#e2f0fb',
        border: '2px solid #b2dafa',
        borderRadius:30
    },
    imagen:{
        width:'20%',
        borderRadius:30
    }
    
}

export default Header