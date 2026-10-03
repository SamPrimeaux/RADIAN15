import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { PRODUCTS } from '../data/catalog';

interface FlyState {
  startX: number;
  startY: number;
  active: boolean;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, options?: { color?: string; size?: string; count?: number; event?: React.MouseEvent }) => void;
  removeFromCart: (productId: string, color: string, size: string) => void;
  updateQuantity: (productId: string, color: string, size: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;

  // Drawer & Modal States
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isBagOpen: boolean;
  setIsBagOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isDiscoverOpen: boolean;
  setIsDiscoverOpen: (open: boolean) => void;
  isPromoOpen: boolean;
  setIsPromoOpen: (open: boolean) => void;
  activeStoryIndex: number | null;
  setActiveStoryIndex: (index: number | null) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (prod: Product | null) => void;
  isReserveModalOpen: boolean;
  setIsReserveModalOpen: (open: boolean) => void;

  // Dedicated Product Page state
  activeProductPage: Product | null;
  setActiveProductPage: (prod: Product | null) => void;

  // AgentSam Assistant Dashboard
  isAgentSamOpen: boolean;
  setIsAgentSamOpen: (open: boolean) => void;

  // Fly animation & bag pop
  flyState: FlyState;
  isBagPopping: boolean;

  // Currency
  currency: string;
  setCurrency: (c: string) => void;
  currencyRate: number;
  formatPrice: (amount: number) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Sable Blazer default in cart
      selectedColor: 'Obsidian Black',
      selectedSize: '38',
      quantity: 1
    }
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  // Dedicated Product Page
  const [activeProductPage, setActiveProductPage] = useState<Product | null>(null);

  // AgentSam Assistant Dashboard
  const [isAgentSamOpen, setIsAgentSamOpen] = useState(false);

  const [flyState, setFlyState] = useState<FlyState>({ startX: 0, startY: 0, active: false });
  const [isBagPopping, setIsBagPopping] = useState(false);

  const [currency, setCurrency] = useState('USD');

  const currencyRates: Record<string, { symbol: string; rate: number }> = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    JPY: { symbol: '¥', rate: 152.0 }
  };

  const currencyRate = currencyRates[currency]?.rate || 1.0;

  const formatPrice = (amount: number) => {
    const info = currencyRates[currency] || { symbol: '$', rate: 1.0 };
    const converted = amount * info.rate;
    if (currency === 'JPY') {
      return `${info.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${info.symbol}${converted.toFixed(2)}`;
  };

  // Scroll lock effect when any full overlay is active
  useEffect(() => {
    const isAnyModalOpen =
      isMenuOpen ||
      isBagOpen ||
      isDiscoverOpen ||
      activeStoryIndex !== null ||
      quickViewProduct !== null ||
      isReserveModalOpen;

    if (isAnyModalOpen) {
      document.documentElement.classList.add('is-scroll-locked');
      document.body.classList.add('is-scroll-locked');
    } else {
      document.documentElement.classList.remove('is-scroll-locked');
      document.body.classList.remove('is-scroll-locked');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsBagOpen(false);
        setIsSearchOpen(false);
        setIsDiscoverOpen(false);
        setIsPromoOpen(false);
        setActiveStoryIndex(null);
        setQuickViewProduct(null);
        setIsReserveModalOpen(false);
        setIsAgentSamOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, isBagOpen, isDiscoverOpen, activeStoryIndex, quickViewProduct, isReserveModalOpen]);

  // Scroll to top when opening a dedicated product page
  useEffect(() => {
    if (activeProductPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeProductPage]);

  const addToCart = (
    product: Product,
    options?: { color?: string; size?: string; count?: number; event?: React.MouseEvent }
  ) => {
    const color = options?.color || product.colors[0]?.name || 'Standard';
    const size = options?.size || product.sizes[0] || 'One Size';
    const count = options?.count || 1;

    // Trigger fly-to-cart animation if click coordinates exist
    if (options?.event) {
      const rect = (options.event.currentTarget as HTMLElement).getBoundingClientRect();
      setFlyState({
        startX: rect.left + rect.width / 2,
        startY: rect.top + rect.height / 2,
        active: true
      });
      setTimeout(() => {
        setFlyState({ startX: 0, startY: 0, active: false });
        setIsBagPopping(true);
        setTimeout(() => setIsBagPopping(false), 450);
      }, 550);
    } else {
      setIsBagPopping(true);
      setTimeout(() => setIsBagPopping(false), 450);
    }

    setCart(prev => {
      const existing = prev.find(
        item => item.product.id === product.id && item.selectedColor === color && item.selectedSize === size
      );
      if (existing) {
        return prev.map(item =>
          item === existing ? { ...item, quantity: item.quantity + count } : item
        );
      }
      return [...prev, { product, selectedColor: color, selectedSize: size, quantity: count }];
    });
  };

  const removeFromCart = (productId: string, color: string, size: string) => {
    setCart(prev =>
      prev.filter(
        item => !(item.product.id === productId && item.selectedColor === color && item.selectedSize === size)
      )
    );
  };

  const updateQuantity = (productId: string, color: string, size: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId, color, size);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId && item.selectedColor === color && item.selectedSize === size
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const freeShippingThreshold = 150;
  const freeShippingProgress = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        freeShippingThreshold,
        freeShippingProgress,
        isMenuOpen,
        setIsMenuOpen,
        isBagOpen,
        setIsBagOpen,
        isSearchOpen,
        setIsSearchOpen,
        isDiscoverOpen,
        setIsDiscoverOpen,
        isPromoOpen,
        setIsPromoOpen,
        activeStoryIndex,
        setActiveStoryIndex,
        quickViewProduct,
        setQuickViewProduct,
        isReserveModalOpen,
        setIsReserveModalOpen,
        activeProductPage,
        setActiveProductPage,
        isAgentSamOpen,
        setIsAgentSamOpen,
        flyState,
        isBagPopping,
        currency,
        setCurrency,
        currencyRate,
        formatPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
