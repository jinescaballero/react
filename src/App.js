
import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import MiComponente from "./MiComponente";
import Usuarios from "./Usuarios";

const App =() => { 
  const dash = "Dona un pedacito de Alegria a quienes mas lo necesitan";

  const onAdd = (count) => {
    console.log("Un mensaje");
  }


  return (
    <>
      <NavBar />
      <ItemListContainer greeting={dash}/>
      <MiComponente stock={5} onAdd={onAdd}/>
      <Usuarios/> 
    </>
  )
}
export default App;
