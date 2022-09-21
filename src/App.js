
import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import './index.css';
import Swal from 'sweetalert2'

const App =() => { 
  const landing = "Dona un pedacito de Alegria a quienes mas lo necesitan";
  

 /*  const onAdd = (count) => {
    Swal.fire(`Se agregaron ${count} items al carrito`);
  } */


  return (
    <>
      <NavBar />
      <ItemListContainer greeting={landing}/>
      <ItemDetailContainer/>
      {/* <ItemCount stock={5} initial="1" onAdd={onAdd}/> */}
    </>
  )
}

export default App;
