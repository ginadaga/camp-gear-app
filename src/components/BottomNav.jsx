import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const tabs = [
  {
    label: 'Home',
    path: '/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'Shop',
    path: '/products',
    isShop: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    label: 'Wishlist',
    path: '/wishlist',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    label: 'Account',
    path: '/account',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [shopOpen, setShopOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Shop overlay */}
      {shopOpen && (
        <div className="fixed inset-0 z-30 flex items-end justify-center pb-20">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShopOpen(false)} />
          <div className="relative z-10 w-[90%] max-w-[380px] rounded-[15px] border border-white/60 overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/40 via-amber-600/30 to-green-700/30 pointer-events-none" />
            <button
              onClick={() => setShopOpen(false)}
              className="absolute top-3 right-3 z-20 text-black/70 hover:text-black cursor-pointer"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="relative z-10 flex flex-col gap-10 items-center px-16 py-12">
              <button
                onClick={() => { setShopOpen(false); navigate('/categories'); }}
                className="w-full py-4 rounded-[15px] border border-black/60 bg-[rgba(125,170,134,0.4)] text-black font-bold text-base text-center"
              >
                Categories
              </button>
              <button
                onClick={() => { setShopOpen(false); navigate('/brands'); }}
                className="w-full py-4 rounded-[15px] border border-black/60 bg-[rgba(125,170,134,0.4)] text-black font-bold text-base text-center"
              >
                Brands
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="shrink-0 z-20 flex items-center justify-around px-2 pb-4 pt-2 border-t-2 border-white backdrop-blur-sm bg-white/10">
        {tabs.map((tab) => {
          const active = isActive(tab.path);

          if (tab.isShop) {
            const isShopRoute = location.pathname.startsWith('/categories') || location.pathname.startsWith('/brands') || location.pathname.startsWith('/products');
            const shopActive = shopOpen || isShopRoute;
            return (
              <button
                key={tab.label}
                onClick={() => setShopOpen(!shopOpen)}
                className={`flex flex-col items-center gap-0.5 px-4 py-1 rounded-full transition-all ${
                  shopActive
                    ? 'border-l border-r border-brand-blue text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <span className={shopActive ? 'text-white' : 'text-white/80'}>{tab.icon}</span>
                <span className="text-[10px] font-normal">{tab.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={tab.label}
              to={tab.path}
              className={`flex flex-col items-center gap-0.5 px-4 py-1 rounded-full transition-all no-underline ${
                active
                  ? 'border-l border-r border-brand-blue text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span className={active ? 'text-white' : 'text-white/80'}>{tab.icon}</span>
              <span className="text-[10px] font-normal">{tab.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
