import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const products = [
  { id: 1, name: 'RV Furnace', brand: 'Meyers Heating', price: '$1,800.00', image: '/images/product-rv-furnace-1.jpg' },
  { id: 2, name: 'RV Furnace', brand: 'B Solutions', price: '$1,479.00', image: '/images/product-rv-furnace-2.jpg' },
];

export default function ProductList() {
  return (
    <div>
      <BackButton />
      <div className="px-7 pb-6">
        <div className="flex gap-7 justify-center flex-wrap">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="flex flex-col gap-2.5 px-1.5 py-1 no-underline">
              <div className="w-[94px] h-[105px] rounded-[10px] border border-black/30 shadow-[0px_4px_4px_0px_rgba(112,113,42,0.2)] overflow-hidden bg-white">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-black">
                <p className="text-[10px] font-medium font-[Inter]">{product.name}</p>
                <p className="text-[8px] font-[Inter]">{product.brand}</p>
                <p className="text-[10px] font-[Inter] mt-2">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
