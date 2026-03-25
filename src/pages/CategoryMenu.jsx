import { useNavigate } from 'react-router-dom';

const categories = [
  'Clothing',
  'Tents & Shelters',
  'Sleeping',
  'Kitchen Gear',
  'Hiking Packs',
  'Footwear',
  'Hydration',
  'Headlamps & Lighting',
  'Furniture',
  'Gadgets & Gear',
  'Heating & Climate Control',
];

export default function CategoryMenu() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col h-full">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-10 text-black"
        aria-label="Back"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Category list */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-[300px]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => navigate(category === 'Clothing' ? '/categories/clothing' : '/products')}
              className="w-full text-left border-b border-black px-1.5 py-2.5 text-2xl text-black font-normal transition-colors hover:text-[#515050] hover:border-[#515050]"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
