import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const { cartItemsCount } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[var(--primary-color)]">
            Vinial
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <Link href="/subscription" className="text-gray-600 hover:text-gray-900">Subscriptions</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/customer-area">
                  <Button variant="secondary">My Account</Button>
                </Link>
                <Link href="/cart" className="relative">
                  <span className="absolute -top-2 -right-2 bg-[var(--primary-color)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </Link>
              </>
            ) : (
              <Link href="/login">
                <Button variant="primary">Sign In</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
              <Link href="/subscription" className="text-gray-600 hover:text-gray-900">Subscriptions</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              {user ? (
                <Link href="/customer-area" className="text-gray-600 hover:text-gray-900">My Account</Link>
              ) : (
                <Link href="/login" className="text-gray-600 hover:text-gray-900">Sign In</Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}; 