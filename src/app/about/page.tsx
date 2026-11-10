import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Badge variant="secondary" className="mb-6">
          About this project
        </Badge>
 
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Build as evidence
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            This webshop is not just a demo. It is a conscious technical foundation 
            that shows what is possible when you build well from the ground up
          </p>

          <p>
            From product management to shopping cart and checkout - everything is set up in no time 
            that it can easily be expanded later with real payments, 
            a database, admin panel or multi-tenant functionality.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/products">
            <Button size="lg">
              Watch products
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact 
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
