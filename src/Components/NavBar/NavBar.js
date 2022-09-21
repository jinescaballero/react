import React from 'react'
import logo from '../../assets/logo.jpeg'
import CartWidget from '../CartWidget/CartWidget';
import { Nav } from './Nav/Nav';



const NavBar =({nombre})=>{
    const categorias=[
        {id:0,nombre:'Primera Necesidad'},
        {id:1,nombre:'Alimentos'},
        {id:2,nombre:'Ropa'},
        {id:3,nombre:'Dinero'},
    ]
    
        return(
            <header style={styles.container}>
                <img style={styles.imagen} src={logo} alt="logo" />
                <h2>Bienvenid@ {nombre}!</h2>
                <Nav categorias={categorias}/>
                <CartWidget/>
            </header>
        )
    }
    
    
    const styles ={
        container:{
            display: 'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding: '1%',
            fontSize: '130%',
            background: '#e2f0fb',
            border: '2px solid 72a0c1'
        },
        imagen:{
            width:'20%',
            borderRadius:30
        }
        
    }
    
    export default NavBar