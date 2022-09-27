import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export const Nav = ({ categorias }) => {
    return (
        <nav>
            {categorias.map((categoria) => {
                return <Link key={categoria.id} to={categoria.ruta} style={styles.links} >{categoria.nombre}</Link>
            })}
        </nav>
    )
}

const styles = {
    links: {
        padding: 10,
    }
}