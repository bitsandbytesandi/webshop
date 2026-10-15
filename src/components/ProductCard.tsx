"use client"

import Link from "next/link"
import Image from "next/image"
import { Product } from "@/types/product"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/store/cart"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-md">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {!product.inStock && (
            <Badge variant="secondary" className="absolute top-3 left-3 z-10">
              Uitverkocht
            </Badge>
          )}
        </div>
      </Link>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-base leading-tight">
          <Link
            href={`/products/${product.slug}`}
            className="hover:underline underline-offset-4"
          >
            {product.name}
          </Link>
        </CardTitle>
        <p className="text-xs text-muted-foreground">{product.category}</p>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="font-semibold">€{product.price.toFixed(2)}</span>
        <Button
          size="sm"
          disabled={!product.inStock}
          onClick={() => addItem(product)}
        >
          {product.inStock ? "Toevoegen" : "Uitverkocht"}
        </Button>
      </CardFooter>
    </Card>
  )
}
