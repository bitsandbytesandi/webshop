import { getAllProducts } from "@/lib/products"
import { ProductCard } from "@/components/ProductCard"

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Alle producten</h1>
        <p className="text-muted-foreground mt-2">
          {products.length} producten beschikbaar
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
