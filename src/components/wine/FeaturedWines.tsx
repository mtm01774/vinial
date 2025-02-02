import OptimizedImage from '../ui/OptimizedImage';
import Link from 'next/link';

interface FeaturedWine {
  id: number;
  name: string;
  image: string;
  price: number;
  slug: string;
}

interface FeaturedWinesProps {
  wines: FeaturedWine[];
  title: string;
}

export default function FeaturedWines({ wines, title }: FeaturedWinesProps) {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wines.map((wine) => (
            <Link href={`/wines/${wine.slug}`} key={wine.id} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-[300px]">
                  <OptimizedImage
                    src={wine.image}
                    alt={wine.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{wine.name}</h3>
                  <p className="text-primary font-bold">€{wine.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 