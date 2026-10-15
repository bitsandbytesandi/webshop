import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SuccesPage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Bedankt voor je bestelling!</h1>
      <p className="text-muted-foreground mb-8">
        Je betaling is succesvol verwerkt. Je ontvangt een bevestiging per e-mail.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/"> 
          <Button size="lg">
            Terug naar home
          </Button>
        </Link>
        <Link href="/products">
          <Button variant="outline" size="lg">
            Verder winkelen
          </Button>
        </Link>
      </div>
    </div>
  )
}
