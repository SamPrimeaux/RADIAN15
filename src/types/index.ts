export interface Product {
  id: string;
  name: string;
  category: 'LEATHER' | 'BOTTOMS' | 'TOPS' | 'DRESSES' | 'FOOTWEAR' | 'OUTERWEAR';
  price: number;
  originalPrice?: number;
  isSale?: boolean;
  image: string;
  hoverImage: string;
  colors: { name: string; hex: string; bgClass?: string }[];
  sizes: string[];
  description: string;
  details?: string[];
  badge?: string;
  rating?: number;
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface StorySlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  productTag?: {
    name: string;
    price: number;
    productId: string;
  };
}

export interface StoryGroup {
  id: string;
  title: string;
  coverImage: string;
  slides: StorySlide[];
}

export interface Hotspot {
  id: string;
  xPercent: number;
  yPercent: number;
  productId: string;
  name: string;
  price: number;
  colorsCount?: number;
}
