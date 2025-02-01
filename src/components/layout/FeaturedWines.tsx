import { WineCard } from '../wine/WineCard';

export const FeaturedWines = () => {
  const featuredWines = [
    {
      id: 1,
      name: "Château Margaux 2015",
      region: "Bordeaux, France",
      price: 599.99,
      image: "/images/wine-1.jpg"
    },
    // ... more wines
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