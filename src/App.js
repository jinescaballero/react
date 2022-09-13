
import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount";
import Swal from 'sweetalert2'
/* import Usuarios from "./Usuarios"; */

const App =() => { 
  const landing = "Dona un pedacito de Alegria a quienes mas lo necesitan";
  

  const onAdd = (count) => {
    Swal.fire(`Se agregaron ${count} items al carrito`);
  }


  return (
    <>
      <NavBar />
      <ItemListContainer greeting={landing}/>
      <ItemCount stock={5} initial="1" onAdd={onAdd}/>
     {/*  <Usuarios/>  */}
    </>
  )
}

export default App;
