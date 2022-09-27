
import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import {Cart} from "./Containers/CartView/Cart";
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from "react-router-dom";

// import Swal from 'sweetalert2'

const App =() => { 
  const landing = "Dona un pedacito de Alegria a quienes mas lo necesitan";
  const detail = "Caracteristicas";

 /*  const onAdd = (count) => {
    Swal.fire(`Se agregaron ${count} items al carrito`);
  } */


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={landing}/>}/>
          <Route path='categoria/:IdCategoria'element= {<ItemListContainer />}/>
          <Route path='producto/:IdProducto' element= {<ItemDetailContainer  greeting={detail} />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
      {/* <ItemCount stock={5} initial="1" onAdd={onAdd}/> */}
    </>
  )
}

export default App;
