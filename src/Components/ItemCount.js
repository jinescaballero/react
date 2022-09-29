import {useState} from 'react'
/* import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; */
import Button from '@mui/material/Button';
import "./ItemCount.css";
/* import Swal from 'sweetalert2'  */

const ItemCount =({stock,initial,onAdd}) => {
    const [contador, setContador] = useState (initial);

    const sumar = () => contador < stock && setContador (contador + 1);

    const restar = () => contador > initial && setContador (contador -1)

    return (
    <> 
        <div className="itemListContainer"> 
            <div className="itemCard"> 
                <button  onClick={restar}> - </button>
                <h3>{contador}</h3>
                <button onClick={sumar}>+</button>
            </div>
            <Button onClick={onAdd} variant="contained">Add to Cart</Button>
        </div>
    </>
    )      
}


export default ItemCount