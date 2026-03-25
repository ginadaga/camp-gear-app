const brands = [
  { name: 'Sora', image: '/images/brand-1.jpg' },
  { name: 'Croc Chief', image: '/images/brand-2.jpg' },
  { name: 'Mori', image: '/images/brand-3.jpg' },
];

export default function PopularBrands() {
  return (
    <section className="px-3 pt-6">
      <h2 className="text-xl text-white font-normal mb-2">Popular Brands</h2>
      <div className="flex gap-4">
        {brands.map((brand) => (
          <button
            key={brand.name}
            className="flex-1 h-16 rounded-md border border-black/30 overflow-hidden bg-white/90 hover:scale-105 transition-transform"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
