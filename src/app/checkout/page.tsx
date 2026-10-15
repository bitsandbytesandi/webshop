"use client"

import { useState } from "react"
import { useCartStore } from "@/store/cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Lege winkelwagen
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Geen producten in je winkelwagen</h1>
        <p className="text-muted-foreground mb-8">
          Voeg eerst producten toe voordat je kunt afrekenen.
        </p>
        <Link href="/products">
          <Button size="lg">Terug naar de shop</Button>
        </Link>
      </div>
    )
  }

  const handleCheckout = async () => {
    try {
      setIsSubmitting(true)

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      })

      const data = await response.json()

      if (data.url) {
        // Redirect naar Stripe Checkout
        window.location.href = data.url
      } else {
        alert(data.error || "Er ging iets mis bij het starten van de betaling")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Er ging iets mis. Probeer het opnieuw.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-10">Afrekenen</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Formulier (links) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contactgegevens */}
          <Card>
            <CardHeader>
              <CardTitle>Contactgegevens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Voornaam</Label>
                  <Input id="firstName" placeholder="Jan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Achternaam</Label>
                  <Input id="lastName" placeholder="de Vries" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mailadres</Label>
                <Input id="email" type="email" placeholder="jan@email.nl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefoonnummer</Label>
                <Input id="phone" type="tel" placeholder="06 12345678" />
              </div>
            </CardContent>
          </Card>

          {/* Verzendadres */}
          <Card>
            <CardHeader>
              <CardTitle>Verzendadres</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Adres + huisnummer</Label>
                <Input id="address" placeholder="Hoofdstraat 12" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="postal">Postcode</Label>
                  <Input id="postal" placeholder="1234 AB" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="city">Plaats</Label>
                  <Input id="city" placeholder="Amsterdam" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Land</Label>
                <Input id="country" defaultValue="Nederland" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overzicht (rechts) */}
        <div>
          <div className="sticky top-24">
            <div className="rounded-xl border bg-card p-6 space-y-5 shadow-sm">
              <h2 className="text-lg font-semibold">Overzicht</h2>

              {/* Producten */}
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between text-sm gap-4"
                  >
                    <div>
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-muted-foreground">
                        {item.quantity} × €{item.product.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="font-medium whitespace-nowrap">
                      €{(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totalen */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotaal</span>
                  <span>€{totalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Verzending</span>
                  <span className="text-green-600 font-medium">Gratis</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Totaal</span>
                  <span>€{totalPrice().toFixed(2)}</span>
                </div>
              </div>

              {/* Stripe knop */}
              <Button
                type="button"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
                onClick={handleCheckout}
              >
                {isSubmitting ? "Doorsturen naar Stripe..." : "Betaal met Stripe"}
              </Button>

              <Link href="/cart" className="block">
                <Button variant="outline" className="w-full" type="button">
                  Terug naar winkelwagen
                </Button>
              </Link>

              <p className="text-xs text-center text-muted-foreground pt-2">
                Je wordt veilig doorgestuurd naar Stripe om te betalen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
