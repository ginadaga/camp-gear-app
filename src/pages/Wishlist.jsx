import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const wishlistItems = [
  { id: 1, name: 'Grey Rib T-Shirt', brand: 'Pinebound', price: '$45.00', image: '/images/wishlist-1.jpg' },
  { id: 2, name: 'Light Grey T-Shirt', brand: 'Pinebound', price: '$45.00', image: '/images/wishlist-2.jpg' },
  { id: 3, name: 'Trek Shorts', brand: 'Sora', price: '$50.00', image: '/images/wishlist-3.jpg' },
  { id: 4, name: 'Trek Pants', brand: 'Sora', price: '$65.00', image: '/images/wishlist-4.jpg' },
  { id: 5, name: 'RV Furnace', brand: 'Meyers Heating', price: '$1,800.00', image: '/images/wishlist-5.jpg' },
  { id: 6, name: 'Trek Boots', brand: 'Neko', price: '$150.00', image: '/images/wishlist-6.jpg' },
];

export default function Wishlist() {
  const [cols, setCols] = useState(2);

  return (
    <div>
      {/* Back button, heart & layout toggle */}
      <div className="flex items-center justify-between px-4 pt-4">
        <BackButton />

        {/* Heart icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8ac2ed" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>

        {/* Layout toggle */}
        <button
          onClick={() => setCols(cols === 2 ? 3 : 2)}
          className="flex flex-col items-center gap-1"
          aria-label="Toggle layout"
        >
          {/* 2-col icon */}
          <div className={`flex gap-1.5 px-1.5 py-1 rounded-full ${cols === 2 ? 'border border-black/50' : ''}`}>
            <div className="w-[7px] h-[8px] border border-black rounded-full" />
            <div className="w-[7px] h-[8px] border border-black rounded-full" />
          </div>
          {/* 3-col icon */}
          <div className={`flex gap-1 px-1.5 py-1 rounded-full ${cols === 3 ? 'border border-black/50' : ''}`}>
            <div className="w-[7px] h-[8px] border border-black rounded-full" />
            <div className="w-[7px] h-[8px] border border-black rounded-full" />
            <div className="w-[7px] h-[8px] border border-black rounded-full" />
          </div>
        </button>
      </div>

      <div className="px-2.5 pb-6 flex flex-col items-center gap-2.5">
        {/* Product grid */}
        <div
          className={`grid mx-auto ${
            cols === 2 ? 'grid-cols-2 max-w-[260px] gap-x-7 gap-y-2' : 'grid-cols-3 max-w-[360px] gap-x-4 gap-y-2'
          }`}
        >
          {wishlistItems.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="flex flex-col gap-2.5 px-1.5 py-5 no-underline">
              <div className="w-[94px] h-[105px] rounded-[10px] border border-black/30 shadow-[0px_4px_4px_0px_rgba(112,113,42,0.2)] overflow-hidden bg-white">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-black">
                <p className="text-[10px] font-medium font-[Inter]">{item.name}</p>
                <p className="text-[8px] font-[Inter]">{item.brand}</p>
                <p className="text-[10px] font-[Inter] mt-2">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
