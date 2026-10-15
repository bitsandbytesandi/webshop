import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Badge variant="secondary" className="mb-6">
          Over dit project
        </Badge>
 
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Gebouwd als bewijs
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            Deze webshop is niet zomaar een demo. Het is een bewuste technische fundering
            die laat zien wat er mogelijk is wanneer je vanaf de basis goed bouwt.
          </p>

          <p>
            Van productbeheer tot winkelwagen en checkout - alles is zo opgezet 
            dat het later makkelijk uitgebreid kan worden met echte betalingen,
            een database, admin panel of multi-tenant functionaliteit.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/products">
            <Button size="lg">
              Bekijk de producten
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Neem contact op 
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
