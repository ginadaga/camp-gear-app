import { useNavigate } from 'react-router-dom';

const subcategories = ['Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories'];

export default function ClothingWomens() {
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

      {/* Subcategory list */}
      <div className="px-12 pt-10">
        <div className="w-[300px]">
          {subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => navigate('/categories/clothing/womens/products')}
              className="w-full text-left border-b border-black px-1.5 py-2.5 text-2xl text-black font-normal transition-colors hover:text-[#515050] hover:border-[#515050]"
            >
              {sub}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
