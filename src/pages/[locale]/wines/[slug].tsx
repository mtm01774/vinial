import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { useCart } from '@/hooks/useCart';

// Temporary data - should come from an API or database
const wines = {
  'chateau-margaux-2015': {
    id: 1,
    name: "Château Margaux 2015",
    region: "Bordeaux, France",
    price: 599.99,
    image: "/images/wines/featured/margaux.jpg",
    description: "A legendary wine from one of Bordeaux's most prestigious estates. The 2015 vintage is considered exceptional, offering complex aromas of dark fruits, tobacco, and subtle oak notes."
  },
  'opus-one-2018': {
    id: 2,
    name: "Opus One 2018",
    region: "Napa Valley, USA",
    price: 399.99,
    image: "/images/wines/featured/opus.jpg",
    description: "A perfect collaboration between Bordeaux and Napa Valley. The 2018 vintage shows remarkable balance, with notes of black cherry, cassis, and hints of vanilla."
  },
  'sassicaia-2017': {
    id: 3,
    name: "Sassicaia 2017",
    region: "Tuscany, Italy",
    price: 349.99,
    image: "/images/wines/featured/sassicaia.jpg",
    description: "The pioneer of Super Tuscans. The 2017 vintage offers intense aromas of ripe berries, Mediterranean herbs, and elegant oak spices."
  }
};

export default function WineDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const { addToCart } = useCart();

  const wine = wines[slug as keyof typeof wines];

  if (!wine) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Wine not found</h1>
          <p>The wine you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <OptimizedImage
              src={wine.image}
              alt={wine.name}
              fill
              priority
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">{wine.name}</h1>
            <p className="text-gray-600 mb-4">{wine.region}</p>
            <p className="text-2xl font-bold text-primary mb-6">€{wine.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-8">{wine.description}</p>
            <button
              onClick={() => addToCart({ id: wine.id, name: wine.name, price: wine.price, image: wine.image })}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
} 