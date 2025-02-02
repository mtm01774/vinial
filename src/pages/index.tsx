import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { useRouter } from 'next/router';
import { useCart } from '@/hooks/useCart';
import { useTranslations } from '@/hooks/useTranslations';
import Link from 'next/link';

const wines = [
  {
    id: 1,
    name: "Château Margaux 2015",
    region: "Bordeaux, France",
    price: 599.99,
    image: "/images/wines/featured/margaux.jpg",
    slug: "chateau-margaux-2015"
  },
  {
    id: 2,
    name: "Opus One 2018",
    region: "Napa Valley, USA",
    price: 399.99,
    image: "/images/wines/featured/opus.jpg",
    slug: "opus-one-2018"
  },
  {
    id: 3,
    name: "Sassicaia 2017",
    region: "Tuscany, Italy",
    price: 349.99,
    image: "/images/wines/featured/sassicaia.jpg",
    slug: "sassicaia-2017"
  }
];

const Home: NextPage = () => {
  const router = useRouter();
  const { locale = 'pt' } = router;
  const t = useTranslations(locale);
  const { addToCart } = useCart();

  return (
    <Layout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px]">
          <OptimizedImage
            src="/images/hero/hero-banner.jpg"
            alt="Wine collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {t.home.hero.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {t.home.hero.subtitle}
              </p>
              <Link
                href={`/${locale}/shop`}
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                {t.home.hero.cta}
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Wines */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                {t.home.featured.title}
              </h2>
              <p className="text-xl text-gray-600">
                {t.home.featured.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {wines.map((wine) => (
                <article key={wine.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                  <Link href={`/${locale}/wines/${wine.slug}`} className="block relative aspect-square">
                    <OptimizedImage
                      src={wine.image}
                      alt={wine.name}
                      fill
                      quality={85}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>
                  <div className="p-4">
                    <Link href={`/${locale}/wines/${wine.slug}`} className="block group">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{wine.name}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{wine.region}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">
                        €{wine.price.toFixed(2)}
                      </span>
                      <button 
                        onClick={() => addToCart({ id: wine.id, name: wine.name, price: wine.price, image: wine.image })}
                        className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home; 