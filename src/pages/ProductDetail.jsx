import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function ProductDetail() {
  const navigate = useNavigate();
  const [descOpen, setDescOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div>
      <BackButton />
      <div className="px-4 pb-6">
        <div className="border border-brand-green rounded-[30px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.3)] overflow-hidden pt-10 pb-7 px-4 flex flex-col items-center gap-2.5 relative">
          {/* Wishlist heart */}
          <button className="absolute top-2.5 right-5" aria-label="Add to wishlist" onClick={() => setWishlisted(!wishlisted)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill={wishlisted ? '#e53e3e' : 'none'} stroke={wishlisted ? '#e53e3e' : 'white'} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>

          {/* Product Image */}
          <div className="w-[339px] h-[220px] rounded-[10px] border border-brand-green shadow-[0px_4px_4px_0px_rgba(112,113,42,0.2)] overflow-hidden">
            <img src="/images/product-detail-image.jpg" alt="RV Furnace" className="w-full h-full object-cover" />
          </div>

          {/* Product Info */}
          <div className="text-center py-5 flex flex-col gap-5 items-center">
            <div className="text-black">
              <p className="text-base font-bold" style={{ fontFamily: "'Arlen Expanded Bold', 'Arlen', Georgia, serif" }}>RV Furnace</p>
              <p className="text-[13px]">Meyers Heating</p>
              <p className="text-[13px] mt-3">$1,800.00 CAD (duties included)</p>
            </div>

            <button
              onClick={() => navigate('/cart')}
              className="w-[200px] py-2.5 px-4 rounded-[20px] border border-brand-green bg-brand-bg/60 shadow-[0px_4px_4px_0px_rgba(112,113,42,0.2)]"
            >
              <span className="text-white text-base font-black">Add to Cart</span>
            </button>
          </div>

          {/* Expandable sections */}
          <div className="flex flex-col gap-2.5 items-center w-[280px]">
            <button
              onClick={() => setDescOpen(!descOpen)}
              className="w-full flex items-center gap-1 px-[7px] py-1 text-left"
            >
              <span className="text-xs text-black" style={{ fontFamily: "'Arial', sans-serif" }}>Product Description</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                {descOpen ? <line x1="6" y1="12" x2="18" y2="12" /> : <><line x1="12" y1="6" x2="12" y2="18" /><line x1="6" y1="12" x2="18" y2="12" /></>}
              </svg>
            </button>
            {descOpen && (
              <div className="w-full px-[7px] py-2 text-xs text-black/70">
                High-efficiency RV furnace designed for cold-weather camping. Features quiet operation and low power consumption.
              </div>
            )}

            <button
              onClick={() => setDetailsOpen(!detailsOpen)}
              className="w-full flex items-center gap-1 px-[7px] py-1 text-left"
            >
              <span className="text-xs text-black" style={{ fontFamily: "'Arial', sans-serif" }}>Product Details</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                {detailsOpen ? <line x1="6" y1="12" x2="18" y2="12" /> : <><line x1="12" y1="6" x2="12" y2="18" /><line x1="6" y1="12" x2="18" y2="12" /></>}
              </svg>
            </button>
            {detailsOpen && (
              <div className="w-full px-[7px] py-2 text-xs text-black/70">
                BTU: 30,000 | Weight: 15 lbs | Dimensions: 14" x 10" x 10" | Fuel: Propane
              </div>
            )}

            <button
              onClick={() => navigate('/reviews')}
              className="w-full px-[7px] py-1 text-left"
            >
              <p className="text-xs text-black" style={{ fontFamily: "'Arial', sans-serif" }}>Need more info? Click here!</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
