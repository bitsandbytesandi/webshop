"use client"

import Link from "next/link"
import { useCartStore } from "@/store/cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Je winkelwagen is leeg</h1>
        <p className="text-muted-foreground mb-8">Voeg wat mooie producten toe.</p>
        <Link href="/products">
          <Button size="lg">
            Verder winkelen
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Winkelwagen</h1>
        <Button variant="ghost" onClick={clearCart}>
          Leegmaken
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.product.id}>
              <CardContent className="p-4 flex gap-4">
                <div className="w-24 h-24 bg-muted rounded-md flex items-center justify-center text-xs text-muted-foreground shrink-0">
                  {item.product.name}
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.product.slug}`}
                    className="font-medium hover:underline"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    €{item.product.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center border rounded-md">
                      <button
                        className="px-3 py-1 text-sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                      <button
                        className="px-3 py-1 text-sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="text-sm text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.product.id)}
                    >
                      Verwijderen
                    </button>
                  </div>
                </div>

                <div className="font-semibold">
                  €{(item.product.price * item.quantity).toFixed(2)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-lg font-semibold">Overzicht</h2>

              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotaal</span>
                <span>€{totalPrice().toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Verzending</span>
                <span>Wordt berekend</span>
              </div>

              <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                <span>Totaal</span>
                <span>€{totalPrice().toFixed(2)}</span>
              </div>

              <Link href="/checkout">
                <Button className="w-full" size="lg">
                  Afrekenen
                </Button>
              </Link>

              <Link href="/products">
                <Button variant="outline" className="w-full">
                  Verder winkelen
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
