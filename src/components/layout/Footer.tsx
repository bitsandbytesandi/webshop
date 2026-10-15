"use client"

import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">ELITE</h3>
            <p className="text-sm text-muted-foreground">
              Premium custom webshops. Gebouwd om te schalen.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/products" className="hover:text-foreground">Alle producten</Link></li>
              <li><Link href="/collections" className="hover:text-foreground">Collecties</Link></li>
              <li><Link href="/new" className="hover:text-foreground">Nieuw</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-foreground">Verzending</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Voorwaarden</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {year} Elite Webshop. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  )
}
