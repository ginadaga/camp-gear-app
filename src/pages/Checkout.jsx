import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const chevron = (
  <svg width="8" height="13" viewBox="0 0 8 13" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round">
    <path d="M1 1l5.5 5.5L1 12" />
  </svg>
);

const sections = [
  { label: 'Shipping address:', single: true },
  { label: 'Shipping option:', single: true },
  { label: 'Payment type', single: true },
  {
    label: null,
    multi: ['Store credit/gift card:', 'Promo code:'],
  },
];

export default function Checkout() {
  return (
    <div>
      <BackButton />
      <div className="px-6 pb-6 flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-7 items-center w-full">
          {sections.map((section, i) => (
            <button
              key={i}
              className="w-full h-[70px] bg-white/40 border border-black rounded-[30px] flex items-center justify-between px-5 py-4"
            >
              <div className="text-base text-black" style={{ fontFamily: "'Georgia', serif" }}>
                {section.single && <p>{section.label}</p>}
                {section.multi && section.multi.map((line, j) => (
                  <p key={j} className={j > 0 ? 'mt-1' : ''}>{line}</p>
                ))}
              </div>
              {chevron}
            </button>
          ))}
        </div>

        <Link
          to="/order-placed"
          className="bg-brand-green text-white text-xl text-center py-2.5 px-12 rounded-[5px] no-underline"
        >
          Place Order
        </Link>
      </div>
    </div>
  );
}
