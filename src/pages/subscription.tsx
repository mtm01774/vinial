import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Button } from '../components/ui/Button';

const translations = {
  pt: {
    title: 'Clube do Vinho',
    subtitle: 'Escolha o plano perfeito para sua jornada no mundo do vinho',
    plans: {
      starter: {
        name: 'Iniciante',
        price: '49.99',
        bottles: '2',
        features: [
          '2 Vinhos Premium por Mês',
          'Notas de Degustação',
          'Descontos Exclusivos',
          'Cancele Quando Quiser'
        ]
      },
      enthusiast: {
        name: 'Entusiasta',
        price: '89.99',
        bottles: '4',
        features: [
          '4 Vinhos Premium por Mês',
          'Notas de Degustação',
          'Descontos Exclusivos',
          'Acesso Prioritário',
          'Frete Grátis'
        ]
      },
      connoisseur: {
        name: 'Conhecedor',
        price: '159.99',
        bottles: '6',
        features: [
          '6 Vinhos Premium por Mês',
          'Notas de Degustação Detalhadas',
          'Maiores Descontos',
          'Acesso Prioritário',
          'Frete Grátis',
          'Eventos Exclusivos'
        ]
      }
    },
    cta: 'Assinar Agora'
  },
  en: {
    title: 'Wine Club',
    subtitle: 'Choose the perfect plan for your wine journey',
    plans: {
      starter: {
        name: 'Starter',
        price: '49.99',
        bottles: '2',
        features: [
          '2 Premium Wines Monthly',
          'Tasting Notes',
          'Member Discounts',
          'Cancel Anytime'
        ]
      },
      enthusiast: {
        name: 'Enthusiast',
        price: '89.99',
        bottles: '4',
        features: [
          '4 Premium Wines Monthly',
          'Tasting Notes',
          'Member Discounts',
          'Priority Access',
          'Free Shipping'
        ]
      },
      connoisseur: {
        name: 'Connoisseur',
        price: '159.99',
        bottles: '6',
        features: [
          '6 Premium Wines Monthly',
          'Expert Tasting Notes',
          'VIP Member Discounts',
          'Priority Access',
          'Free Shipping',
          'Exclusive Events'
        ]
      }
    },
    cta: 'Subscribe Now'
  }
};

export default function Subscription() {
  const { locale = 'en' } = useRouter();
  const t = translations[locale as keyof typeof translations];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(t.plans).map(([key, plan]) => (
            <div key={key} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold text-primary mb-4">
                €{plan.price}
                <span className="text-base font-normal text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">
                {plan.bottles} bottles per month
              </p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">{t.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 