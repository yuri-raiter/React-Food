import { createContext, useState } from "react";
import { IMyOrderContext, IOrder, IProvider } from "../types";

export const MyOrderContext = createContext<IMyOrderContext>(
   {} as IMyOrderContext
)

export function MyOrderProvider({ children }: IProvider) {
   const [order, setOrder] = useState<IOrder[]>([])

   return (
      <MyOrderContext.Provider value={{order, setOrder}}>
         { children }
      </MyOrderContext.Provider>
   )
}