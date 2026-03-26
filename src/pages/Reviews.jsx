import BackButton from '../components/BackButton';

export default function Reviews() {
  return (
    <div>
      <BackButton />
      <div className="px-5 pb-6 flex flex-col gap-5">
        {/* Product summary bar */}
        <div className="flex gap-5 items-center justify-center bg-[rgba(199,206,182,0.4)] border-[0.5px] border-black rounded-[30px] overflow-hidden py-2.5">
          <div className="w-[106px] h-[74px] rounded-[20px] overflow-hidden shrink-0">
            <img src="/images/reviews-product-thumb.png" alt="RV Furnace" className="w-full h-full object-cover" />
          </div>
          <div className="p-[5px]">
            <p className="text-base text-black" style={{ fontFamily: "'Arlen', sans-serif" }}>RV Furnace</p>
            <p className="text-sm text-black" style={{ fontFamily: "'Arial', sans-serif" }}>Meyers Heating</p>
          </div>
        </div>

        {/* Reviews card */}
        <div className="bg-[rgba(199,206,182,0.4)] border-2 border-[#8ac2ed] rounded-[30px] overflow-hidden p-5 flex flex-col gap-5">
          <p className="text-base text-black font-bold" style={{ fontFamily: "'Arlen Expanded Bold', 'Arlen', Georgia, serif" }}>
            What people are saying:
          </p>

          <div className="text-base text-black leading-5" style={{ fontFamily: "'Arial', sans-serif" }}>
            <p className="mb-4">
              Customers consistently praise this RV furnace for its reliable heating performance, fast warm-up time, and relatively quiet operation compared to similar models.
            </p>
            <p className="mb-4">
              Many reviewers also highlight its straightforward installation and solid build quality. Some minor feedback mentions that the fan can be slightly louder at startup and that clearer installation instructions would be helpful, but overall satisfaction remains very high.
            </p>
            <p className="text-xs underline">Click here to view sources</p>
          </div>

          <div className="flex gap-1.5 items-start">
            {/* Chat icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="black" opacity="0.6" />
            </svg>
            <p className="text-xs text-[#4d4e01] leading-5" style={{ fontFamily: "'Arial', sans-serif" }}>
              Need more info? Chat with us here and we will find it for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
