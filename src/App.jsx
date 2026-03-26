import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderPlaced from './pages/OrderPlaced';
import Wishlist from './pages/Wishlist';
import Account from './pages/Account';
import BrandMenu from './pages/BrandMenu';
import CategoryMenu from './pages/CategoryMenu';
import ClothingSubcategory from './pages/ClothingSubcategory';
import ClothingWomens from './pages/ClothingWomens';
import ProductListWomen from './pages/ProductListWomen';
import Reviews from './pages/Reviews';
import CartEmpty from './pages/CartEmpty';
import { CartProvider, useCart } from './context/CartContext';

function CartRoute() {
  const { cartItems } = useCart();
  return cartItems.length === 0 ? <CartEmpty /> : <Cart />;
}

const backgrounds = {
  '/': '/images/bg-main.jpg',
  '/products': '/images/bg-product-list.jpg',
  '/cart': '/images/bg-cart.jpg',
  '/checkout': '/images/bg-checkout.jpg',
  '/order-placed': '/images/bg-order-placed.jpg',
  '/wishlist': '/images/bg-wishlist.jpg',
  '/account': '/images/bg-account.jpg',
};

function getBackground(pathname) {
  if (pathname.startsWith('/product/')) return '/images/bg-product.jpg';
  return backgrounds[pathname] || '/images/bg-main.jpg';
}

export default function App() {
  const location = useLocation();
  const bgImage = getBackground(location.pathname);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="relative mx-auto w-[402px] max-w-full h-[874px] rounded-[38px] overflow-hidden border border-black/20 flex items-center justify-center">
        <img
          src="/images/loading-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {/* Triangles + text */}
        <svg width="420" height="340" viewBox="0 0 420 340" className="absolute left-[-9px]" style={{ filter: 'blur(12px)', top: '22%' }}>
          {/* Light green triangle - behind orange */}
          <path d="M210,-30 Q210,-42 220,-34 L440,350 Q453,362 435,355 L-15,355 Q-33,362 -20,350 Z" fill="rgba(180,210,140,0.5)" />
          {/* Orange triangle - taller, more visible */}
          <path d="M210,12 Q210,0 220,8 L405,330 Q418,342 400,335 L20,335 Q2,342 15,330 Z" fill="rgba(211,83,4,0.5)" />
          {/* Blue triangle - shorter, more orange border showing */}
          <path d="M210,90 Q210,78 220,86 L355,305 Q368,318 350,312 L70,312 Q52,318 65,305 Z" fill="rgba(138,194,237,0.8)" />
        </svg>
        {/* Brand name - outside SVG so it's not blurred */}
        <p
          className="absolute text-[32px] text-white text-center w-full"
          style={{
            fontFamily: "'Arlen Expanded Bold', 'Arlen', Georgia, serif",
            top: '53%',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          CAMP.GEAR
        </p>
      </div>
    );
  }

  return (
    <CartProvider>
    <div id="app-phone" className="relative mx-auto w-[402px] max-w-full h-[874px] rounded-[38px] overflow-hidden border border-black/20 flex flex-col">
      {/* Background */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
      />

      <NavBar />

      <main className="flex-1 min-h-0 overflow-y-auto relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartRoute />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-placed" element={<OrderPlaced />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/brands" element={<BrandMenu />} />
          <Route path="/categories" element={<CategoryMenu />} />
          <Route path="/categories/clothing" element={<ClothingSubcategory />} />
          <Route path="/categories/clothing/womens" element={<ClothingWomens />} />
          <Route path="/categories/clothing/womens/products" element={<ProductListWomen />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
    </CartProvider>
  );
}
