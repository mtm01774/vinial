import Image from 'next/image';
import { Button } from '../ui/Button';

interface WineCardProps {
  wine: {
    id: number;
    name: string;
    region: string;
    price: number;
    image: string;
  };
}

export const WineCard = ({ wine }: WineCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <Image
          src={wine.image}
          alt={wine.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{wine.name}</h3>
        <p className="text-gray-600 mb-2">{wine.region}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[var(--primary-color)]">
            ${wine.price.toFixed(2)}
          </span>
          <Button variant="secondary" className="text-sm px-4 py-2">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}; 