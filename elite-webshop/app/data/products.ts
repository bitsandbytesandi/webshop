export interface Product{
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Apex Precision Chronograph",
    price: 1250,
    category: "Watches",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    description: "Handgemaakt uurwerk met titanium behuizing en krasbestendig saffierglas."
  },
  {
    id: "2",
    name: "Acoustic Elite Wireless",
    price: 499,
    category: "Audio",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    description: "Studio-kwaliteit ruisonderdrukking met een batterijduur van 40 uur."
  },
  {
    id: "3",
    name: "Visionary Stealth Eyewear",
    price: 320,
    category: "Accessoiries",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    description: "Lichtgewicht gepolariseerde zonnebril ontworpen voor maximale bescherming en stijl."
  },
  {
    id: "4",
    name: "Luxe Minimalist Backpack",
    price: 650,
    category: "Bags",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop.",
    description: "Waterafstotend Italiaans leer met een geavanceerd vakindeling voor MacBooks."
  }
];
