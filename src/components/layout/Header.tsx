import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from '@/hooks/useTranslations';
import { useCart } from '@/hooks/useCart';

export default function Header() {
  const router = useRouter();
  const { locale = 'pt' } = router;
  const t = useTranslations(locale);
  const { cartItems } = useCart();

  const navigation = [
    { name: 'Home', href: `/${locale}` },
    { name: 'Shop', href: `/${locale}/shop` },
    { name: 'About', href: `/${locale}/about` },
    { name: 'Contact', href: `/${locale}/contact` }
  ];

  const toggleLocale = () => {
    const newLocale = locale === 'pt' ? 'en' : 'pt';
    const path = router.asPath;
    router.push(path, path, { locale: newLocale });
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-2xl font-bold text-primary">
              Vinial
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-600 hover:text-primary transition-colors ${
                    router.asPath === item.href ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={toggleLocale}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {locale.toUpperCase()}
            </button>

            <Link
              href={`/${locale}/cart`}
              className="relative text-gray-600 hover:text-primary transition-colors"
            >
              <span className="sr-only">Cart</span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link
              href={`/${locale}/login`}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <span className="sr-only">Login</span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 