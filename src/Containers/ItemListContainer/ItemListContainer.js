import React from 'react'


const ItemListContainer = ({greeting}) => {
  return (

      <h1  style={styles.container}>{greeting}</h1>
  )
}

const styles ={
  container:{
      padding: '1%',
      margin:'1%',
  }
  
}


export default ItemListContainer