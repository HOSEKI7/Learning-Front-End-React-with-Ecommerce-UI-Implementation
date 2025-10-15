// types/product.ts
export interface Rating {
  rate: number;
  count: number;
}

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  // optional fields kalau kamu pakai di UI
  link?: string;
  variant?: string;
  realPrice?: number;
}
