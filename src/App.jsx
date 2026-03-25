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

  return (
    <div className="relative mx-auto w-[402px] max-w-full h-[874px] rounded-[38px] overflow-hidden border border-black/20 flex flex-col">
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
          <Route path="/cart" element={<Cart />} />
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
  );
}
