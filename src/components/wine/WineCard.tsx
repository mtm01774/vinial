import type { FC } from 'react';
import { Wine } from '@/types/wine';
import OptimizedImage from '../ui/OptimizedImage';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface WineCardProps {
  wine: Wine;
}

const WineCard: FC<WineCardProps> = ({ wine }) => {
  const { locale } = useRouter();
  if (!wine) return null;

  return (
    <Link 
      href={{
        pathname: '/[locale]/wine/[id]',
        query: { locale, id: wine.id }
      }}
      as={`/${locale}/wine/${wine.id}`}
      className="group"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="relative h-64">
          <OptimizedImage
            src={wine.image}
            alt={wine.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {wine.name}
          </h3>
          
          <p className="text-gray-600 mb-2">{wine.region}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span className="text-gray-700">{wine.rating}</span>
            </div>
            
            <p className="text-lg font-bold text-primary">
              {new Intl.NumberFormat(locale, {
                style: 'currency',
                currency: locale === 'pt' ? 'BRL' : 'EUR'
              }).format(wine.price)}
            </p>
          </div>
          
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
            {wine.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WineCard; 