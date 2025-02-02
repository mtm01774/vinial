import { useCart } from '../../hooks/useCart';
import { translations } from '../../locales';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Cart() {
  const router = useRouter();
  const { locale } = router.query;
  const t = translations[locale as keyof typeof translations]?.cart;

  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!t) {
    return null; // or some loading state
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">{t.title}</h1>
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">{t.emptyCart}</p>
          <Link href="/shop" className="text-primary hover:text-primary-dark">
            {t.continueShopping}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{t.title}</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
            <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-primary font-bold">€{item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="sr-only">{t.quantity}</label>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 p-1 border rounded text-center"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
                aria-label={t.remove}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div className="text-xl font-bold">
          {t.total}: €{total.toFixed(2)}
        </div>
        <Link
          href="/checkout"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          {t.checkout}
        </Link>
      </div>
    </div>
  );
} 