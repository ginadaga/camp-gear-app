import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'RV Furnace', brand: 'Meyers Heating', price: '$1,800.00', image: '/images/product-rv-furnace-1.jpg' },
  { id: 2, name: 'RV Furnace', brand: 'B Solutions', price: '$1,479.00', image: '/images/product-rv-furnace-2.jpg' },
];

export default function ProductList() {
  const navigate = useNavigate();
  const [cols, setCols] = useState(2);

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
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="flex flex-col items-start gap-2 py-5 px-1.5 text-left no-underline"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
