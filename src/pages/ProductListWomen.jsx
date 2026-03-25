import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 'grey-rib-tshirt', name: 'Grey Rib T-Shirt', brand: 'Pinebound', price: '$45.00', image: '/images/products/grey-rib-tshirt.png' },
  { id: 'light-grey-tshirt', name: 'Light Grey T-Shirt', brand: 'Pinebound', price: '$45.00', image: '/images/products/light-grey-tshirt.png' },
  { id: 'dark-grey-tshirt', name: 'Dark Grey T-Shirt', brand: 'Pinebound', price: '$45.00', image: '/images/products/dark-grey-tshirt.png' },
  { id: 'trek-shorts', name: 'Trek Shorts', brand: 'Sora', price: '$50.00', image: '/images/products/trek-shorts.png' },
  { id: 'trek-pants', name: 'Trek Pants', brand: 'Sora', price: '$65.00', image: '/images/products/trek-pants.png' },
  { id: 'trek-pants-2', name: 'Trek Pants', brand: 'Sora', price: '$75.00', image: '/images/products/trek-pants-2.png' },
  { id: 'rv-furnace', name: 'RV Furnace', brand: 'Meyers Heating', price: '$1,800.00', image: '/images/products/rv-furnace.png' },
  { id: 'trek-boots', name: 'Trek Boots', brand: 'Neko', price: '$150.00', image: '/images/products/trek-boots.png' },
  { id: 'camping-bundle', name: 'Camping Bundle', brand: 'Sora', price: '$225.00', image: '/images/products/camping-bundle.png' },
];

export default function ProductListWomen() {
  const navigate = useNavigate();
  const [cols, setCols] = useState(2);

  // In 2-col mode, show first 6 products; in 3-col mode, show all 9
  const visibleProducts = cols === 2 ? products.filter((_, i) => ![2, 5, 8].includes(i)) : products;

  return (
    <div className="relative flex flex-col h-full">
      {/* Back button & layout toggle */}
      <div className="flex items-center justify-between px-4 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="text-black"
          aria-label="Back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

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

      {/* Product grid */}
      <div className="flex-1 overflow-y-auto px-2 pb-4">
        <div
          className={`grid gap-y-2 mx-auto ${
            cols === 2 ? 'grid-cols-2 max-w-[260px]' : 'grid-cols-3 max-w-[360px]'
          }`}
        >
          {visibleProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="flex flex-col items-start gap-2 py-5 px-1.5 text-left"
            >
              <div className="w-[94px] h-[105px] rounded-[10px] border border-black/50 shadow-md overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] font-medium text-black">{product.name}</p>
                <p className="text-[8px] text-black">{product.brand}</p>
                <p className="text-[10px] text-black mt-2">{product.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
