import { useRouter } from 'next/router';
import { translations } from '../../locales';
import Layout from '@/components/layout/Layout';

export default function Shop() {
  const router = useRouter();
  const { locale = 'en' } = router;
  const t = translations[locale as keyof typeof translations];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wine list will go here */}
        </div>
      </div>
    </Layout>
  );
} 