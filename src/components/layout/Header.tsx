"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useCartStore } from "@/store/cart"

export function Header() {
  const totalItems = useCartStore((state) => state.totalItems())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">ELITE</span>
          <Badge variant="secondary" className="hidden sm:inline-flex text-xs">
            Shop
          </Badge>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link href="/products" className="transition-colors hover:text-foreground/80">
            Producten
          </Link>
          <Link href="/collections" className="transition-colors hover:text-foreground/80">
            Collecties
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground/80">
            Over ons
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Cart */}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu - Correct Base UI syntax */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-6 mt-10">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Producten
                </Link>
                <Link
                  href="/collections"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Collecties
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Over ons
                </Link>
                <Link
                  href="/cart"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Winkelwagen {mounted && totalItems > 0 ? `(${totalItems})` : ""}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
