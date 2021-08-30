import { createContext, useState } from "react"
import { IClickedProductContext, IProduct, IProvider } from "../types"

export const ClickedProductContext = createContext<IClickedProductContext>(
   {} as IClickedProductContext
)

export function ClickedProductProvider({ children }: IProvider) {
   const [clickedProduct, setClickedProduct] = useState<IProduct>(
      {} as IProduct 
   )

   return (
      <ClickedProductContext.Provider value={{clickedProduct, setClickedProduct}}>
         {children}
      </ClickedProductContext.Provider>
   )
}