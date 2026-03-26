import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import BackButton from '../components/BackButton';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [descOpen, setDescOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [showCartOverlay, setShowCartOverlay] = useState(false);

  return (
    <div className="relative h-full">
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
              onClick={() => {
                addToCart({
                  id: 'rv-furnace',
                  name: 'RV Furnace',
                  brand: 'Meyers Heating',
                  price: '$1,800.00',
                  image: '/images/cart-item-image.jpg',
                });
                setShowCartOverlay(true);
              }}
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

      {/* Added to Cart Overlay - bottom sheet portaled to app container */}
      {showCartOverlay && document.getElementById('app-phone') && createPortal(
        <div className="absolute bottom-0 left-0 right-0 z-[100] flex flex-col rounded-t-[20px] overflow-hidden" style={{ top: '38%', background: 'linear-gradient(180deg, rgba(190,170,110,0.97) 0%, rgba(195,175,125,0.96) 20%, rgba(200,180,140,0.95) 50%, rgba(195,180,155,0.94) 80%, rgba(190,180,165,0.93) 100%)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
          {/* Close button */}
          <button
            onClick={() => setShowCartOverlay(false)}
            className="absolute top-[10px] right-[16px] z-10"
            aria-label="Close"
          >
            <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="rgba(80,80,80,0.6)" />
              <path d="M11 11L21 21M21 11L11 21" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Added to cart text */}
          <p className="text-white text-[15px] text-center mt-[40px] font-['Inter',sans-serif]">Added to cart!</p>

          {/* Product card */}
          <div className="mx-[21px] mt-[20px] bg-[rgba(112,113,42,0.2)] border-[0.5px] border-black rounded-[30px] py-[20px] flex flex-col gap-[20px] items-center">
            <div className="flex items-center w-[293px]">
              <div className="w-[150px] h-[104px] rounded-[20px] overflow-hidden">
                <img src="/images/cart-item-image.jpg" alt="RV Furnace" className="w-full h-full object-cover" />
              </div>
              <div className="ml-[20px] p-[5px]">
                <p className="text-[16px] text-black" style={{ fontFamily: "'Arlen Expanded Bold', 'Arlen', Georgia, serif" }}>RV Furnace</p>
                <p className="text-[14px] text-black font-['Arial',sans-serif]">Meyers Heating</p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowCartOverlay(false);
                navigate('/cart');
              }}
              className="w-[200px] py-[10px] px-[15px] rounded-[20px] border border-[#70712a] bg-[rgba(112,113,42,0.15)] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.2)]"
            >
              <span className="text-white text-[16px] font-black font-['Arial_Black',sans-serif]">Go to cart</span>
            </button>
          </div>

          {/* Recommended products */}
          <p className="text-white text-[15px] text-center mt-[16px] font-['Inter',sans-serif]">Recommended products:</p>
          <div className="flex gap-[21px] justify-center mt-[8px]">
            <div className="flex flex-col gap-[10px] items-start px-[6px] py-[5px]">
              <div className="w-[94px] h-[105px] rounded-[10px] border-[0.5px] border-black shadow-[0px_4px_4px_0px_rgba(112,113,42,0.2)] overflow-hidden bg-white">
                <img src="/images/product-rv-furnace-2.jpg" alt="RV Furnace" className="w-full h-full object-cover" />
              </div>
              <div className="text-black font-['Inter',sans-serif]">
                <p className="text-[10px] font-medium">RV Furnace</p>
                <p className="text-[8px]">B Solutions</p>
                <p className="text-[10px] mt-2">$1,479.00</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] items-start px-[6px] py-[5px]">
              <div className="w-[94px] h-[105px] rounded-[10px] border-[0.5px] border-black shadow-[0px_4px_4px_0px_rgba(112,113,42,0.2)] overflow-hidden bg-white">
                <img src="/images/product-rv-furnace-1.jpg" alt="RV Furnace" className="w-full h-full object-cover" />
              </div>
              <div className="text-black font-['Inter',sans-serif]">
                <p className="text-[10px] font-medium">RV Furnace</p>
                <p className="text-[8px]">B Solutions</p>
                <p className="text-[10px] mt-2">$XX.XX</p>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById('app-phone')
      )}
    </div>
  );
}
