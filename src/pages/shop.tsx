import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import WineList from '@/components/wine/WineList';
import { useWine } from '@/hooks/useWine';
import { useRouter } from 'next/router';
import { useTranslations } from '@/hooks/useTranslations';

const Shop: NextPage = () => {
  const { wines, isLoading, error } = useWine();
  const { locale } = useRouter();
  const t = useTranslations(locale);

  return (
    <Layout>
      <main className="flex-1">
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">{t.shop.title}</h1>
          
          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}
          
          {error && (
            <div className="text-center text-red-600">
              <p>{t.shop.errorLoading}</p>
              <p className="text-sm">{error.message}</p>
            </div>
          )}
          
          {wines && wines.length > 0 && <WineList wines={wines} />}
          
          {wines && wines.length === 0 && (
            <div className="text-center text-gray-600">
              <p>{t.shop.noWines}</p>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
};

export default Shop; 