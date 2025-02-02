import type { FC } from 'react';
import { Wine } from '@/types/wine';
import WineCard from './WineCard';

interface WineListProps {
  wines: Wine[];
}

const WineList: FC<WineListProps> = ({ wines }) => {
  if (!wines || wines.length === 0) {
    return (
      <div className="text-center text-gray-600">
        <p>Nenhum vinho encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {wines.map((wine) => (
        <WineCard key={wine.id} wine={wine} />
      ))}
    </div>
  );
};

export default WineList; 