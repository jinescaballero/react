
import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import { Cart } from "./Components/CartView/Cart";
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { CustomProvider } from "./Context/CartContext";

const App =() => { 
  const landing = "Dona un pedacito de Alegria a quienes mas lo necesitan";
  const detail = "Caracteristicas";


  return (
    <>
      <BrowserRouter>
      <CustomProvider>
          <NavBar name='Ine'/>
          <Routes>
            <Route path='/' element= {<ItemListContainer greeting={landing}/>}/>
            <Route path='categoria/:IdCategoria'element= {<ItemListContainer />}/>
            <Route path='producto/:IdProducto' element= {<ItemDetailContainer  greeting={detail} />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
