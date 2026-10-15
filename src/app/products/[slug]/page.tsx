import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getProductBySlug, getAllProducts } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import { AddToCartButton } from "@/components/AddToCartButton"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/products"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Terug naar producten
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <Badge variant="secondary" className="mb-3">
              {product.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold mt-3">
              €{product.price.toFixed(2)}
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed text-base">
            {product.description}
          </p>

          <div className="flex items-center gap-3">
            {product.inStock ? (
              <Badge
                variant="outline"
                className="text-green-600 border-green-600/50"
              >
                Op voorraad
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="text-red-600 border-red-600/50"
              >
                Uitverkocht
              </Badge>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <AddToCartButton product={product} />
            <button className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
              Favoriet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
