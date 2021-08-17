import { createContext, useEffect, useState, ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import { api } from './services/api'


interface Product {
   id: number
   name: string
   description: string
   weight: number
   price: number
   category: string
   image: string
}

interface ProductsContextProps {
   products: Product[]
   id: string
}

interface ProductsProviderProps {
   children: ReactNode
}


export const ProductsContext = createContext<ProductsContextProps>(
   {} as ProductsContextProps
)

export function ProductsProvider({ children }: ProductsProviderProps) {
   const [products, setProducts] = useState<Product[]>([])
   const { id }: {id: string} = useParams()

   useEffect(() => {
      api.get(id)
         .then(res => setProducts(res.data))
   }, [id])

   return (
      <ProductsContext.Provider value={{products, id}}>
         {children}
      </ProductsContext.Provider>
   )
}