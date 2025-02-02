import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function About() {
  const router = useRouter();
  const { locale = 'en' } = router;

  const content = {
    pt: {
      title: 'Sobre Nós',
      subtitle: 'Descubra nossa paixão por vinhos excepcionais',
      description: 'A Vinial nasceu da paixão por vinhos excepcionais e do desejo de compartilhar essa experiência com amantes de vinho em todo o mundo. Nossa missão é tornar os melhores vinhos do mundo acessíveis, oferecendo uma seleção cuidadosamente curada das mais prestigiadas vinícolas.',
      mission: 'Nossa Missão',
      missionText: 'Conectar apreciadores de vinho com as melhores vinícolas do mundo, proporcionando uma experiência única de descoberta e apreciação.',
      values: 'Nossos Valores',
      valuesList: [
        'Excelência na seleção de vinhos',
        'Compromisso com a autenticidade',
        'Atendimento personalizado',
        'Sustentabilidade e responsabilidade'
      ]
    },
    en: {
      title: 'About Us',
      subtitle: 'Discover our passion for exceptional wines',
      description: 'Vinial was born from a passion for exceptional wines and the desire to share this experience with wine lovers worldwide. Our mission is to make the world\'s finest wines accessible, offering a carefully curated selection from the most prestigious wineries.',
      mission: 'Our Mission',
      missionText: 'To connect wine enthusiasts with the world\'s finest wineries, providing a unique experience of discovery and appreciation.',
      values: 'Our Values',
      valuesList: [
        'Excellence in wine selection',
        'Commitment to authenticity',
        'Personalized service',
        'Sustainability and responsibility'
      ]
    }
  };

  const t = content[locale as keyof typeof content];

  return (
    <Layout>
      <div className="relative h-[40vh] w-full">
        <OptimizedImage
          src="/images/about/winery.jpg"
          alt="Winery"
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl">{t.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            {t.description}
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{t.mission}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.missionText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">{t.values}</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              {t.valuesList.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
} 