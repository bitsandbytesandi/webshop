import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SuccesPage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Thanks for your order!</h1>
      <p className="text-muted-foreground mb-8">
        Your payment has been successfully processed.You will receive a confirmation by email.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/"> 
          <Button size="lg">
            Back to home
          </Button>
        </Link>
        <Link href="/products">
          <Button variant="outline" size="lg">
            Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}
