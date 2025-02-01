import { WineCard } from '../wine/WineCard';

export const FeaturedWines = () => {
  const featuredWines = [
    {
      id: 1,
      name: "Château Margaux 2015",
      region: "Bordeaux, France",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6"
    },
    {
      id: 2,
      name: "Opus One 2018",
      region: "Napa Valley, USA",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809"
    },
    {
      id: 3,
      name: "Sassicaia 2017",
      region: "Tuscany, Italy",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Wines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </div>
    </section>
  );
}; 