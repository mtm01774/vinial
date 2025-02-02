import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import OptimizedImage from '../components/ui/OptimizedImage';

const translations = {
  pt: {
    title: 'Sobre Nós',
    subtitle: 'Uma história de paixão pelo vinho',
    mission: {
      title: 'Nossa Missão',
      description: 'Conectar amantes do vinho com as melhores vinícolas do mundo, oferecendo uma experiência única de descoberta e apreciação.'
    },
    values: {
      title: 'Nossos Valores',
      list: [
        {
          title: 'Qualidade',
          description: 'Selecionamos cuidadosamente cada vinho em nosso catálogo.'
        },
        {
          title: 'Autenticidade',
          description: 'Trabalhamos diretamente com produtores respeitados.'
        },
        {
          title: 'Sustentabilidade',
          description: 'Promovemos práticas sustentáveis em toda nossa operação.'
        }
      ]
    },
    story: {
      title: 'Nossa História',
      description: 'Fundada em 2023, a Vinial nasceu da paixão por vinhos excepcionais e do desejo de torná-los acessíveis a todos os apreciadores. Nossa jornada começou com uma simples ideia: criar uma plataforma que não apenas vendesse vinhos, mas que educasse e inspirasse pessoas a explorar o fascinante mundo do vinho.'
    }
  },
  en: {
    title: 'About Us',
    subtitle: 'A story of passion for wine',
    mission: {
      title: 'Our Mission',
      description: 'To connect wine lovers with the world\'s finest wineries, offering a unique experience of discovery and appreciation.'
    },
    values: {
      title: 'Our Values',
      list: [
        {
          title: 'Quality',
          description: 'We carefully select each wine in our catalog.'
        },
        {
          title: 'Authenticity',
          description: 'We work directly with respected producers.'
        },
        {
          title: 'Sustainability',
          description: 'We promote sustainable practices throughout our operation.'
        }
      ]
    },
    story: {
      title: 'Our Story',
      description: 'Founded in 2023, Vinial was born from a passion for exceptional wines and the desire to make them accessible to all wine enthusiasts. Our journey began with a simple idea: to create a platform that not only sold wines but educated and inspired people to explore the fascinating world of wine.'
    }
  }
};

export default function About() {
  const { locale = 'en' } = useRouter();
  const t = translations[locale as keyof typeof translations];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px]">
            <OptimizedImage
              src="/images/about/winery.jpg"
              alt="Vinial winery"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">{t.story.title}</h2>
            <p className="text-gray-600">{t.story.description}</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-center">{t.mission.title}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            {t.mission.description}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">{t.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.values.list.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 