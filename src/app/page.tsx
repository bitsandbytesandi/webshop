"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/products"
import { ProductCard } from "@/components/ProductCard"
import { ArrowRight, Terminal } from "lucide-react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const featured = getFeaturedProducts()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-neutral-900">

      {/* Subtiel developer raster */}
      <div className="pointer-events-none absolute inset-0 -z-10 dev-raster" />

      {/* Zeer zachte gouden orbs (blijven licht) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-[110px] opacity-30 animate-float-slow"
          style={{ background: "radial-gradient(circle, rgba(201,164,92,0.35) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-20 w-[480px] h-[480px] rounded-full blur-[120px] opacity-25 animate-float-slower"
          style={{ background: "radial-gradient(circle, rgba(241,214,154,0.30) 0%, transparent 70%)" }}
        />
      </div>

      {/* HERO */}
      <section className="relative pt-32 pb-28 md:pt-44 md:pb-36 text-center">
        <div className="container mx-auto px-4">
          <div className={`mx-auto max-w-4xl transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            {/* Klein developer detail */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-1.5 text-[11px] tracking-widest text-neutral-500 backdrop-blur-sm">
              <Terminal className="h-3.5 w-3.5 text-[#c9a45c]" />
              <span>built for builders</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
              <span className="block text-neutral-900">ELITE</span>
              <span className="block mt-3 text-[0.42em] tracking-[0.18em] font-medium animate-gold-pulse">
                THE DEVELOPER&apos;S GOLDEN ERA
              </span>
            </h1>

            <p className="mt-10 max-w-xl mx-auto text-base md:text-lg text-neutral-500 leading-relaxed">
              Een zelf-herstellende, schaalbare Next.js fundering.  
              Gebouwd om websites te maken die voelen alsof ze €5000 waard zijn.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="h-13 px-9 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02]"
                >
                  Betreed de winkel
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-9 rounded-full border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                >
                  Over dit project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#c9a45c] mb-2">
                Selected work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                Uitgelichte stukken
              </h2>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="group text-neutral-500 hover:text-neutral-900">
                Alles bekijken
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {featured.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/70 backdrop-blur-sm transition-all duration-500 hover:border-[#c9a45c]/40 hover:shadow-lg hover:shadow-[#c9a45c]/8 hover:-translate-y-1.5"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className={`relative mx-auto max-w-2xl rounded-3xl border border-neutral-200 bg-white/80 backdrop-blur-md p-12 md:p-16 text-center shadow-sm transition-all duration-1000 delay-500 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            
            {/* Mijn detail: subtiele gouden lijn bovenin */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent animate-soft-breath" />

            <p className="text-[11px] tracking-[0.25em] uppercase text-[#c9a45c] mb-5">
              Next chapter
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-5">
              Klaar om iets  
              <span className="animate-gold-pulse"> timeless </span>
              te bouwen?
            </h2>

            <p className="text-neutral-500 max-w-md mx-auto mb-10 leading-relaxed">
              Dit project is bewijs van wat er mogelijk is met een sterke technische fundering.  
              Geen templates. Alleen pure craft.
            </p>

            <Link href="/contact">
              <Button
                size="lg"
                className="h-13 px-11 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02]"
              >
                Neem contact op
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
