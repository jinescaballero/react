import React from 'react'
import logo from '../../assets/logo.jpeg'
import { CartWidget } from '../CartWidget/CartWidget';
import { Nav } from './Nav/Nav';
import { Link } from 'react-router-dom';



const NavBar =({name})=>{
    const categorias=[
        {id:0,nombre:'Primera Necesidad', ruta:'/categoria/PrimeraNecesidad'},
        {id:1,nombre:'Alimentos', ruta:'/categoria/Alimentos'},
        {id:2,nombre:'Ropa', ruta:'/categoria/Ropa'},
        {id:3,nombre:'Dinero', ruta:'/categoria/Dinero'},
    ]
    
        return(
            <header style={styles.container}>
                <Link to={'/'}>
                    <img width='300'  src={logo} alt="logo" />
                </Link>
                <h2>Bienvenid@ {name}!</h2> 
                <Nav categorias={categorias}/>
                <Link to={'/cart'}><CartWidget/></Link>
                
            </header>
        )
    }
    
    
    const styles ={
        container:{
            display: 'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding: '1%',
            margin: '1%',
            fontSize: '130%',
            background: '#e2f0fb',
            border: '2px solid 72a0c1'
        },
        links:{
            display:'flex'
            
        },
        imagen:{
            width:'20%',
            borderRadius:30
        }
        
    }
    
    export default NavBar