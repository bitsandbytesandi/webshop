import { Product } from "./product"

export type CartItem = {
  product: Product
  quantity: number
}

export type CartState = {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: () => number
  totalPrice: () => number
}
