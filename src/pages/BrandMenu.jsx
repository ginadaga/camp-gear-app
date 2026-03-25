import { useNavigate } from 'react-router-dom';

const brands = {
  '#': ['032c', '7 DAYS Active'],
  'A': ['Arc\'teryx', 'ALPS Mountaineering', 'Altra', 'Astral'],
  'B': ['Black Diamond', 'Big Agnes', 'Backcountry', 'Boreas Gear', 'Berghaus', 'Bivy Stick', 'Bach Gear'],
  'C': ['Coleman', 'Campingaz', 'Camp Chef', 'CamelBak', 'Cotopaxi', 'Craghoppers', 'Ciele Athletics'],
  'D': ['Deuter', 'Darn Tough', 'Dakine', 'Dirty Girl Gaiters', 'Dometic', 'Decked'],
  'E': ['Eagle Creek', 'ENO (Eagles Nest Outfitters)', 'Exped', 'Eureka!', 'Eastpak', 'Elemental Horizons'],
  'F': ['Fjällräven', 'Ferrino', 'Fire-Maple', 'Fenix', 'Filson', 'Foxelli'],
  'G': ['Gregory', 'GOAL ZERO', 'Gramicci', 'GSI Outdoors'],
  'H': ['Helinox', 'Hydro Flask', 'Hilleberg', 'Houdini'],
  'I': ['Icebreaker', 'Innate', 'Inov-8', 'Ibex'],
  'J': ['Jenga', 'Jaguar', 'Jolt', 'Juventus'],
  'K': ['Kaleidoscope', 'Kestrel', 'Kryton', 'Kinetic'],
  'L': ['Luminary', 'Lynx', 'Luxe', 'Lattice'],
  'M': ['Mosaic', 'Mistral', 'Maverick', 'Myriad'],
  'N': ['Nimbus', 'Nautilus', 'Nexus', 'Novus'],
  'O': ['Odyssey', 'Ocelot', 'Orbit', 'Oasis'],
  'P': ['Patagonia', 'Phoenix', 'Pinnacle', 'Pulse', 'Prism'],
  'Q': ['Quasar', 'Quest', 'Quintessence', 'Quokka'],
  'R': ['REI Co-op', 'Rab', 'Red Paddle Co', 'Royal Robbins'],
  'S': ['Sea to Summit', 'Salomon', 'Snow Peak', 'Stoic'],
  'T': ['Therm-a-Rest', 'Teton Sports', 'Trangia', 'The North Face'],
  'U': ['UCO', 'Ultimate Direction', 'Uncharted Supply', 'UST (Ultimate Survival Technologies)'],
  'V': ['Vaude', 'Vibram', 'Vargo', 'Vedavoo'],
  'W': ['Western Mountaineering', 'Wilderness Technology', 'Wild Country', 'Wolf Tooth Components'],
  'X': ['Xtratuf', 'Xero Shoes', 'XTM (Xtreme Tactical Mountaineering)', 'X-Adventure'],
  'Y': ['Yeti', 'Yakima', 'Yates Gear', 'Yellow Leaf Hammocks'],
  'Z': ['Zpacks', 'Zeal Optics', 'Zebco', 'Zero Hour Gear'],
};

const letters = Object.keys(brands);

export default function BrandMenu() {
  const navigate = useNavigate();

  const scrollToLetter = (letter) => {
    const el = document.getElementById(`brand-${letter}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex h-full">
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

      {/* Brand list */}
      <div className="flex-1 overflow-y-auto px-8 pt-14 pb-4">
        {letters.map((letter) => (
          <div key={letter} id={`brand-${letter}`} className="mb-2">
            <div className="border-b border-white/50 rounded-lg p-2.5">
              <p className="font-bold text-base text-black">{letter}</p>
              {brands[letter].map((brand) => (
                <p key={brand} className="text-base text-black">{brand}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Alphabet sidebar */}
      <div className="absolute right-1 top-8 bottom-0 flex flex-col items-center justify-center gap-0.5">
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => scrollToLetter(letter)}
            className="text-[11px] text-black leading-tight"
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
