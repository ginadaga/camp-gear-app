import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function Cart() {
  return (
    <div>
      <BackButton />
      <div className="px-5 pb-6">
        <div className="border border-brand-green rounded-[38px] pt-5 pb-10 px-5 flex flex-col gap-7 items-center">
          {/* Cart Items */}
          <div className="flex flex-col gap-4 items-center py-4 w-full">
            <div className="w-full px-1">
              <p className="text-base font-bold text-black" style={{ fontFamily: "'Georgia', serif" }}>Your cart:</p>
            </div>
            <div className="w-[320px] bg-brand-bg/40 border border-black/30 rounded-[30px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.15)] flex items-center gap-5 py-2.5 px-4">
              <div className="w-[170px] h-[130px] rounded-[20px] overflow-hidden shrink-0">
                <img src="/images/cart-item-image.jpg" alt="RV Furnace" className="w-full h-full object-cover" />
              </div>
              <div className="text-black">
                <p className="text-xl" style={{ fontFamily: "'Georgia', serif" }}>RV Furnace</p>
                <p className="text-[11px]">Meyers Heating</p>
                <p className="text-[13px] mt-3">$1,800.00 CAD</p>
              </div>
            </div>
          </div>

          {/* Costing */}
          <div className="w-full bg-brand-bg/40 border border-black/30 rounded-[30px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.15)] px-5 py-3.5 flex flex-col gap-5 items-center">
            <div className="flex justify-between w-full max-w-[280px]">
              <div className="text-sm text-black space-y-3">
                <p>Subtotal:</p>
                <p>Shipping:</p>
                <p>Sales tax:</p>
                <p className="font-bold">Total:</p>
              </div>
              <div className="text-base text-black text-right space-y-3">
                <p>$1,800.00</p>
                <p>$45.00</p>
                <p>$239.85</p>
                <p className="font-bold">$2,084.85</p>
              </div>
            </div>
            <Link
              to="/checkout"
              className="bg-brand-green text-white text-xl text-center py-2.5 px-12 rounded-[5px] no-underline"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
