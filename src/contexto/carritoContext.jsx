/* eslint-disable react/prop-types */
//para gestionar el context de carrito
import { useState, createContext } from "react";

//creamos el contexto el cual sera llamado en cualquier pagina
export const CarritoContext = createContext();

//CarritoContextProvider este sera el que envuelva en el main del arbol global
export function CarritoContextProvider (props) {
  //en el array del estado carrito se guardara los productos añadidos desde cuaquier ubicacion ya que se comparte mediante el useContext a esa variables de estado carrito creado aqui para que se guarde debemos evitar la recarga de la pagina y mediante un link en la info de ventas ir a carrito y este aparecera guardado
  const [carrito, setCarrito] = useState([]);
  return (
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      {props.children}
    </CarritoContext.Provider>
  )
}

