const categories = [
  { name: 'Footwear', image: '/images/cat-footwear.jpg' },
  { name: 'Gear', image: '/images/cat-gear.jpg' },
  { name: 'Tents', image: '/images/cat-tents.jpg' },
];

export default function PopularCategories() {
  return (
    <section className="px-3 pt-6 pb-8">
      <h2 className="text-xl text-white font-normal mb-2">Popular Categories</h2>
      <div className="flex gap-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="flex-1 flex flex-col items-center gap-1 group"
          >
            <div className="w-full h-[149px] rounded-md border border-black/20 overflow-hidden shadow-sm">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-base text-white text-center">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
