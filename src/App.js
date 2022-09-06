
import React from "react";
import Header from "./Components/Header/Header"
import MiComponente from "./MiComponente.js"
import Usuarios from "./Usuarios.js"

const App =() => { 
  const nombre= "Ines";
  return (
    <>
    <Header nombre={nombre} />
 {/*    <MiComponente/>
    <Usuarios/> */}
    </>
  )
}
export default App;
