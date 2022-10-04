import {useState} from 'react'
/* import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; */
import Button from '@mui/material/Button';
import "./ItemCount.css";
import Swal from 'sweetalert2' 

const ItemCount =({stock,initial,onAdd}) => {
    const [contador, setContador] = useState (initial);
    const sumar =() => {

        (stock - contador) > 0 ? setContador(contador + 1) : Swal.fire(`No hay mas stock!`);
        
    }

    const restar =() => {
        (contador) > 1 ? setContador(contador - 1) : Swal.fire(`Al menos debe haber un ítem para agregar!`);
    }
    const agregar =() => { onAdd(contador);
        Swal.fire(`Se agregaron ${contador} al carrito`);
    }
    return (
    <> 
        <div className="itemListContainer"> 
            <div className="itemCard"> 
                <button  onClick={restar}> - </button>
                <h3>{contador}</h3>
                <button onClick={sumar}>+</button>
            </div>
            <Button onClick={agregar} variant="contained">Add to Cart</Button>
        </div>
    </>
    )      
}


export default ItemCount