import Layout from '../components/layout/Layout';
import { useCart } from '../hooks/useCart';
import { Button } from '../components/ui/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const { locale } = useRouter();

  const translations = {
    pt: {
      title: 'Carrinho de Compras',
      empty: 'Seu carrinho está vazio',
      continue: 'Continuar Comprando',
      remove: 'Remover',
      summary: 'Resumo do Pedido',
      subtotal: 'Subtotal',
      shipping: 'Frete',
      shippingValue: 'Grátis',
      total: 'Total',
      checkout: 'Finalizar Compra',
      currency: 'R$',
    },
    en: {
      title: 'Shopping Cart',
      empty: 'Your cart is empty',
      continue: 'Continue Shopping',
      remove: 'Remove',
      summary: 'Order Summary',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      shippingValue: 'Free',
      total: 'Total',
      checkout: 'Proceed to Checkout',
      currency: '$',
    },
  };

  const t = translations[locale as keyof typeof translations] || translations.pt;

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
          <div className="text-center py-16">
            <p className="text-gray-600 mb-8">{t.empty}</p>
            <Button variant="primary" onClick={() => window.history.back()}>
              {t.continue}
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-sm mb-4"
              >
                <div className="relative w-32 h-32">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 128px, 128px"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    {t.currency} {item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      className="px-3 py-1 hover:bg-gray-100"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button
                      className="px-3 py-1 hover:bg-gray-100"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    {t.remove}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">{t.summary}</h2>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>{t.subtotal}</span>
                  <span>
                    {t.currency} {total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>{t.shipping}</span>
                  <span>{t.shippingValue}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-4">
                  <span>{t.total}</span>
                  <span>
                    {t.currency} {total.toFixed(2)}
                  </span>
                </div>
                <Button variant="primary" className="w-full mt-6">
                  {t.checkout}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 