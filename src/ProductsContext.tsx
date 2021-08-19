import { createContext, useEffect, useState, ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import { api } from './services/api'


export interface Product {
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

interface ClickedProductContextProps {
   clickedProduct: Product
   setClickedProduct: React.Dispatch<React.SetStateAction<Product>>
}

interface ProviderProps {
   children: ReactNode
}


export const ProductsContext = createContext<ProductsContextProps>(
   {} as ProductsContextProps
)

export function ProductsProvider({ children }: ProviderProps) {
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

export const ClickedProductContext = createContext<ClickedProductContextProps>(
   {} as ClickedProductContextProps
)

export function ClickedProductProvider({ children }: ProviderProps) {
   const [clickedProduct, setClickedProduct] = useState<Product>(
      {} as Product 
   )

   return (
      <ClickedProductContext.Provider value={{clickedProduct, setClickedProduct}}>
         {children}
      </ClickedProductContext.Provider>
   )
}