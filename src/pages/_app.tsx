import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import { AgeVerificationModal } from '../components/auth/AgeVerificationModal';
import { useAgeVerification } from '../hooks/useAgeVerification';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const { isModalOpen, onClose } = useAgeVerification();

  return (
    <CartProvider>
      <AgeVerificationModal isOpen={isModalOpen} onClose={onClose} />
      <Component {...pageProps} />
    </CartProvider>
  );
} 