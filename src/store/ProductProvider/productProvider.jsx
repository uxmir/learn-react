import React, { createContext, useEffect, useState } from 'react'
export const ProductContext=createContext()
const ProductProvider = ({children}) => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
     const getAllProduct=async()=>{
        try {
         const response= await fetch('http://localhost:8080/api/v2/product/read')
         const data=await response.json() ;
         setProducts(data.allProduct)   
        } catch (error) {
           console.error('data is not found',error) 
        }
     }
   getAllProduct()
    },[])
  return (
  <ProductContext.Provider value={{products}}>
  {children}
  </ProductContext.Provider>
  )
}

export default ProductProvider