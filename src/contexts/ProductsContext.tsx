import { createContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../services/api"
import { IProduct, IProductsContext, IProvider } from "../types"

export const ProductsContext = createContext<IProductsContext>(
   {} as IProductsContext
)

export function ProductsProvider({ children }: IProvider) {
   const [products, setProducts] = useState<IProduct[]>([])
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