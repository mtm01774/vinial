import Image from 'next/image';
import { Button } from '../ui/Button';

interface HeroProps {
  translations: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function Hero({ translations }: HeroProps) {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-banner.jpg"
          alt="Hero background - Wine cellar"
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
          quality={85}
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">{translations.title}</h1>
          <p className="mb-8 text-xl">{translations.subtitle}</p>
          <Button>{translations.cta}</Button>
        </div>
      </div>
    </div>
  );
} 