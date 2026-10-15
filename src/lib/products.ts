import { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "1",
    slug: "premium-hoodie",
    name: "Premium Hoodie",
    description: "Zachte heavyweight hoodie van organisch katoen. Perfecte pasvorm en premium afwerking.",
    price: 89,
    image: "https://picsum.photos/seed/hoodie/600/600",
    category: "Kleding",
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    slug: "minimal-cap",
    name: "Minimal Cap",
    description: "Strakke baseball cap met geborduurd logo. One size fits all.",
    price: 39,
    image: "https://picsum.photos/seed/cap/600/600",
    category: "Accessoires",
    featured: true,
    inStock: true,
  },
  {
    id: "3",
    slug: "elite-tote",
    name: "Elite Tote Bag",
    description: "Duurzame canvas tote bag. Ruim en stijlvol voor dagelijks gebruik.",
    price: 49,
    image: "https://picsum.photos/seed/tote/600/600",
    category: "Accessoires",
    featured: true,
    inStock: true,
  },
  {
    id: "4",
    slug: "tech-socks",
    name: "Tech Socks (3-pack)",
    description: "Ademende performance socks. Anti-geur en extra demping.",
    price: 29,
    image: "https://picsum.photos/seed/socks/600/600",
    category: "Kleding",
    featured: false,
    inStock: true,
  },
  {
    id: "5",
    slug: "leather-wallet",
    name: "Leather Wallet",
    description: "Handgemaakte leren portemonnee. Slim design met RFID-bescherming.",
    price: 79,
    image: "https://picsum.photos/seed/wallet/600/600",
    category: "Accessoires",
    featured: true,
    inStock: false,
  },
  {
    id: "6",
    slug: "oversized-tee",
    name: "Oversized Tee",
    description: "Relaxed fit t-shirt van 240gsm katoen. Minimalistisch en stevig.",
    price: 45,
    image: "https://picsum.photos/seed/tee/600/600",
    category: "Kleding",
    featured: false,
    inStock: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getAllProducts(): Product[] {
  return products
}
