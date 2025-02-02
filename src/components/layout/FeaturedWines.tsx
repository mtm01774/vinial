import { WineCard } from '../wine/WineCard';

interface FeaturedWinesProps {
  translations: {
    title: string;
    subtitle: string;
  };
}

export const FeaturedWines = ({ translations }: FeaturedWinesProps) => {
  const featuredWines = [
    {
      id: 1,
      name: "Château Margaux 2015",
      region: "Bordeaux, France",
      price: 599.99,
      image: "/images/wines/featured/margaux.jpg"
    },
    {
      id: 2,
      name: "Opus One 2018",
      region: "Napa Valley, USA",
      price: 399.99,
      image: "/images/wines/featured/opus.jpg"
    },
    {
      id: 3,
      name: "Sassicaia 2017",
      region: "Tuscany, Italy",
      price: 349.99,
      image: "/images/wines/featured/sassicaia.jpg"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{translations.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{translations.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredWines.map((wine) => (
            <div key={wine.id} className="flex">
              <WineCard wine={wine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 