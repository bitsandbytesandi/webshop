export type Product = {
  id: string
  slug: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
  inStock: boolean
}
