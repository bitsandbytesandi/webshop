"use client"

import { Button } from "@/components/ui/button"
import { Product } from "@/types/product"
import { useCartStore } from "@/store/cart"

export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <Button
      size="lg"
      className="flex-1"
      disabled={!product.inStock}
      onClick={() => addItem(product)}
    >
      {product.inStock ? "In winkelwagen" : "Uitverkocht"}
    </Button>
  )
}
