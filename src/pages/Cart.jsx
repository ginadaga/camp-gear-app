import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { useCart } from '../context/CartContext';

function parsePrice(priceStr) {
  return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
}

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + parsePrice(item.price), 0);
  const shipping = 45.0;
  const salesTax = +(subtotal * 0.1333).toFixed(2);
  const total = +(subtotal + shipping + salesTax).toFixed(2);

  return (
    <div>
      <BackButton />
      <div className="px-5 pb-6">
        <div className="border border-[#70712a] rounded-[38px] pt-5 pb-10 px-5 flex flex-col gap-[30px] items-center">
          {/* Cart Items */}
          <div className="flex flex-col gap-[17px] items-center py-[15px] w-full">
            <div className="w-[258px]">
              <p className="text-[16px] text-black" style={{ fontFamily: "'Arlen Expanded Bold', 'Arlen', Georgia, serif" }}>Your cart:</p>
            </div>
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="w-[320px] bg-[rgba(199,206,182,0.4)] border-[0.5px] border-black rounded-[30px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.15)] flex items-center gap-5 py-2.5 px-4 relative">
                <div className="w-[170px] h-[130px] rounded-[20px] overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-black">
                  <p className="text-[20px]" style={{ fontFamily: "'Arlen Expanded Bold', 'Arlen', Georgia, serif" }}>{item.name}</p>
                  <p className="text-[11px] font-['Arial',sans-serif]">{item.brand}</p>
                  <p className="text-[13px] mt-3 font-['Arial',sans-serif]">{item.price} CAD</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-2 right-3 text-black/50 hover:text-black text-lg leading-none"
                  aria-label={`Remove ${item.name}`}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Costing */}
          <div className="w-full bg-[rgba(199,206,182,0.4)] border-[0.5px] border-black rounded-[30px] shadow-[0px_4px_4px_0px_rgba(112,113,42,0.15)] px-5 py-[14px] flex flex-col gap-5 items-center">
            <div className="flex gap-[100px] items-center">
              <div className="text-[14px] text-black font-['Arial',sans-serif] space-y-3">
                <p>Subtotal:</p>
                <p>Shipping:</p>
                <p>Sales tax:</p>
                <p className="font-bold">Total:</p>
              </div>
              <div className="text-[16px] text-black text-right font-['Arial',sans-serif] space-y-3">
                <p>${subtotal.toLocaleString('en-CA', { minimumFractionDigits: 2 })}</p>
                <p>${shipping.toFixed(2)}</p>
                <p>${salesTax.toLocaleString('en-CA', { minimumFractionDigits: 2 })}</p>
                <p className="font-bold">${total.toLocaleString('en-CA', { minimumFractionDigits: 2 })}</p>
              </div>
            </div>
            <Link
              to="/checkout"
              className="bg-[#70712a] text-white text-[20px] text-center py-2.5 px-[50px] rounded-[5px] no-underline font-['Arial',sans-serif]"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
