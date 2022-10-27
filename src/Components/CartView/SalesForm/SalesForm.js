import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useCartContext } from "../../../Context/CartContext";
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';

export const SalesForm = () => {
  const { cart, totalPrice, clear } = useCartContext();
  const [inputValues, setInputValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    adress: "",
    flat: "",
  });
  const total = totalPrice();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const finalSale = (e) => {
    e.preventDefault();
    const ventasCollection = collection(db, "sales");
    addDoc(ventasCollection, {
      usuario: inputValues,
      items: cart,
      date: serverTimestamp(),
      total,
    }).then((res) => {
      clear();
        Swal.fire({
        title: 'Gracias por tu Compra!',
        icon: 'success',
        html:
        '<a href="/">Seguir Comprando</a> ',
        showConfirmButton:false
        
    }) 
    });
  
  };

  return (
    <>
      <h1>Usted debera abonar: $ {totalPrice()} </h1>
      <h2>Ingrese sus datos para realizar el envio</h2>
      <div>
        <form onSubmit={finalSale}>
          <input style={styles.input}
            name="name"
            type="name"
            placeholder="Nombre"
            onChange={handleOnChange}
          />
          <input style={styles.input}
            name="surname"
            type="family-name"
            placeholder="Apellido"
            onChange={handleOnChange}
          />
          <input style={styles.input}
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleOnChange}
          />
          <input style={styles.input}
            name="phone"
            type="tel"
            placeholder="Telefono"
            onChange={handleOnChange}
          />
          <input style={styles.input}
            name="adress"
            type="street-address"
            placeholder="Direccion"
            onChange={handleOnChange}
          />
          <input style={styles.input}
            name="flat"
            type="text"
            placeholder="Departamento"
            onChange={handleOnChange}
          />
              <Button onClick={finalSale} height='300px' width='300px' variant="contained">Finalizar Compra</Button>
        </form>
      </div>
    </>
  );
};

const styles ={
  input:{
    display: 'inline',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop: '10px',
    padding: '1%',
    margin: '1%',
    borderRadius:'5px'
  }
}