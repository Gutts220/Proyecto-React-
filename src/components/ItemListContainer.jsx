import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams();

  const productos = [
    {id: 1 , name: "Producto A", description: "Descripcion del producto A", Stock: "10", category:  "cat1"},
    {id: 2 , name: "Producto B", description: "Descripcion del producto B", Stock: "15", category: "cat2"}, 
    {id: 3 , name: "Producto C", description: "Descripcion del producto C", Stock: "20", category: "cat3"},
    {id: 4 , name: "Producto D", description: "Descripcion del producto D", Stock: "25", category: "cat4"},
    {id: 5 , name: "Producto E", description: "Descripcion del producto E", Stock: "25", category: "cat3"},
    {id: 6 , name: "Producto F", description: "Descripcion del producto F", Stock: "25", category: "cat2"},
    {id: 7 , name: "Producto G", description: "Descripcion del producto G", Stock: "25", category: "cat4"},
    {id: 8 , name: "Producto H", description: "Descripcion del producto H", Stock: "10", category:  "cat1"},
  ]

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })
  
  getProductos
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  
  const filteredProducts = productos.filter((producto)=>producto.category === category)
  console.log(filteredProducts)
   

  return (
    <>
      <ItemList productos={filteredProducts} />
    </>
  );
};

export default ItemListContainer;

