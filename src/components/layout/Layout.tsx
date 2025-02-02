import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { locale } = router;

  const switchLocale = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[var(--primary-color)] hover:opacity-90 transition-opacity">
              Vinial
            </Link>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex gap-6">
                <Link href="/shop" className="text-gray-600 hover:text-[var(--primary-color)]">Shop</Link>
                <Link href="/subscription" className="text-gray-600 hover:text-[var(--primary-color)]">Subscription</Link>
                <Link href="/about" className="text-gray-600 hover:text-[var(--primary-color)]">About</Link>
              </nav>
              <div className="flex gap-4">
                <button
                  onClick={() => switchLocale('pt')}
                  className={`${locale === 'pt' ? 'text-[var(--primary-color)]' : 'text-gray-500'} hover:opacity-80 transition-opacity`}
                >
                  PT
                </button>
                <button
                  onClick={() => switchLocale('en')}
                  className={`${locale === 'en' ? 'text-[var(--primary-color)]' : 'text-gray-500'} hover:opacity-80 transition-opacity`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Vinial</h3>
              <p className="text-gray-300">Discover exceptional wines curated from the finest vineyards around the world.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/shop" className="text-gray-300 hover:text-white">Shop</Link></li>
                <li><Link href="/subscription" className="text-gray-300 hover:text-white">Subscription</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@vinial.com</p>
              <p className="text-gray-300">Phone: +351 123 456 789</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Vinial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 