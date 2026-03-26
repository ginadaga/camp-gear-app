import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const menuItems = [
    { label: 'Categories', path: '/categories' },
    { label: 'Brands', path: '/brands' },
    { label: 'Wishlist', path: '/wishlist' },
    { label: 'Account', path: '/account' },
  ];

  return (
    <>
      {searchOpen ? (
        <nav className="shrink-0 z-20 flex items-end justify-end px-5 pt-10 pb-2.5 border-b-2 border-white backdrop-blur-sm bg-white/10">
          <div className="flex items-center w-[289px] border-[1.5px] border-white rounded-[30px] px-5 py-0.5">
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="flex-1 bg-transparent outline-none text-white text-sm placeholder-white/60"
            />
            <button onClick={() => setSearchOpen(false)} aria-label="Close search" className="text-white ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
      ) : (
        <nav className="shrink-0 z-20 flex items-center justify-between px-7 pt-10 pb-2.5 border-b-2 border-white backdrop-blur-sm bg-white/10">
          <div className="flex items-center gap-3">
            <button className="p-1 text-white" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <Link to="/" className="text-lg font-extrabold tracking-wide text-black no-underline" style={{ fontFamily: "'Arlen Expanded Bold', 'Arlen', Georgia, serif" }}>
              Camp.Gear
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <button aria-label="Search" className="text-white" onClick={() => setSearchOpen(true)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </button>
            <button aria-label="Cart" className="relative text-white" onClick={() => navigate('/cart')}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </button>
          </div>
        </nav>
      )}

      {/* Fly-out menu overlay */}
      {menuOpen && (
        <div className="absolute inset-0 z-50 flex rounded-[38px] overflow-hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />

          {/* Menu panel */}
          <div className="relative w-[210px] h-full overflow-hidden border-2 border-white/50 rounded-l-[38px]">
            {/* Background image */}
            <img
              src="/images/fly-menu-bg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Menu items */}
            <div className="relative flex flex-col justify-between h-full">
              <div className="flex flex-col items-start mt-16 ml-8 w-[139px]">
                {menuItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(item.path);
                    }}
                    className="w-full border-b border-black px-[5px] py-[10px] text-left text-[16px] text-black font-normal hover:font-bold transition-all"
                    style={{ fontFamily: "'Arial', sans-serif" }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="ml-8 mb-10 w-[139px]">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/help');
                  }}
                  className="w-full border-b border-black px-[5px] py-[10px] text-left text-[16px] text-black font-normal hover:font-bold transition-all"
                  style={{ fontFamily: "'Arial', sans-serif" }}
                >
                  Help
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
