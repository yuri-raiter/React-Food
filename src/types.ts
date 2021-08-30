import { ReactNode } from "react";

export interface IProduct {
   id: number
   name: string
   description: string
   weight: number
   price: number
   category: string
   image: string
}

export interface IProductsContext {
   products: IProduct[]
   id: string
}

export interface IClickedProductContext {
   clickedProduct: IProduct
   setClickedProduct: React.Dispatch<React.SetStateAction<IProduct>>
}

export interface IMyOrderContext {
   order: IOrder[]
   setOrder: React.Dispatch<React.SetStateAction<IOrder[]>>
}

export interface IOrder extends IProduct {
   quantity: number
}

export interface IProvider {
   children: ReactNode
}

export interface IMain {
   onOpenProductModal: () => void
   onOpenMyOrderModal: () => void
}

export interface IProductModal {
   isOpen: boolean
   onRequestClose: () => void
}

export interface IMyOrderModal {
   isOpen: boolean
   onRequestClose: () => void
}

export interface IQuantityButtons {
   id?: number
   quantity: number
   dropQuantity: (quantity: number, id?: number) => false | void
   increaseQuantity: (id?: number) => void
}

export interface IMainModalButton {
   text: string
}