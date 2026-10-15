import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { getFeaturedProducts } from "@/lib/products"
import { ProductCard } from "@/components/ProductCard"

export default function HomePage() {
  const featured = getFeaturedProducts()

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">
              Premium Custom Webshops
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              De webshop die
              <br />
              <span className="text-primary">€5000 waard is</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Zelf-herstellende, schaalbare Next.js fundering.  
              Gebouwd om websites te maken en te verkopen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/products" className="h-12 px-8 text-base">
                <Button size="lg">
                  Bekijk producten
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  Meer over dit project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Uitgelichte producten</h2>
            <p className="text-muted-foreground mt-2">Geselecteerd uit de collectie</p>
          </div>
          <Link href="/products">  
            <Button variant="ghost">
              Alles bekijken →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
  
      {/* CTA Section */}
      <section className="border-t bg-muted/40">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Klaar om je eigen webshop te laten bouwen?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Dit project is gebouwd als bewijs van wat er mogelijk is met een sterke technische fundering.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Neem contact op
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
