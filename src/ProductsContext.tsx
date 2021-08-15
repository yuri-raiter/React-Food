import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'


interface Product {
   id: number
   name: string
   weight: number
   price: number
   category: string
   image: string
}

interface ProductsProviderProps {
   children: ReactNode
}


export const ProductsContext = createContext<Product[]>([])

export function ProductsProvider({ children }: ProductsProviderProps) {
   const [product, setProduct] = useState<Product[]>([])

   useEffect(() => {
      api.get('pizzas')
         .then(res => setProduct(res.data))
   }, [])

   return (
      <ProductsContext.Provider value={product}>
         {children}
      </ProductsContext.Provider>
   )
}