import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

const recentlyViewed = [
  { id: 'trek-shorts', name: 'Trek Shorts', brand: 'Sora', price: '$50.00', image: '/images/products/trek-shorts.png' },
  { id: 'trek-boots', name: 'Trek Boots', brand: 'Neko', price: '$150.00', image: '/images/products/trek-boots.png' },
];

export default function CartEmpty() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <BackButton />

      <div className="flex-1 overflow-y-auto px-[50px] pb-6">
        {/* Your cart card */}
        <div className="border border-[#70712a] rounded-[38px] px-[20px] pt-[20px] pb-[40px] flex flex-col gap-[30px] items-center mt-8">
          <div className="w-full py-[15px]">
            <p
              className="text-[16px] text-black"
              style={{ fontFamily: "'Arlen Expanded Bold', 'Arlen', Georgia, serif" }}
            >
              Your cart:
            </p>
          </div>
          <p className="text-[14px] text-white text-center font-['Arial',sans-serif] w-[238px]">
            Your cart is empty. Start shopping and check out our New Arrivals
          </p>
        </div>

        {/* Recently viewed card */}
        <div className="border border-[#70712a] rounded-[38px] px-[20px] pt-[20px] pb-[40px] flex flex-col gap-[30px] items-center mt-6">
          <div className="w-full py-[15px]">
            <p
              className="text-[16px] text-black"
              style={{ fontFamily: "'Arlen Expanded Bold', 'Arlen', Georgia, serif" }}
            >
              Recently viewed:
            </p>
          </div>
          <div className="flex gap-[30px]">
            {recentlyViewed.map((product) => (
              <button
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="flex flex-col gap-[10px] items-start px-[6px] py-[5px] text-left"
              >
                <div className="w-[94px] h-[105px] rounded-[10px] border-[0.5px] border-black shadow-[0px_4px_4px_0px_rgba(112,113,42,0.2)] overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-black font-['Inter',sans-serif]">
                  <p className="text-[10px] font-medium">{product.name}</p>
                  <p className="text-[8px]">{product.brand}</p>
                  <p className="text-[10px] mt-2">{product.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
