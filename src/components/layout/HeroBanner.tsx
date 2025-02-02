import OptimizedImage from '../ui/OptimizedImage';

interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
}

export default function HeroBanner({ image, title, subtitle }: HeroBannerProps) {
  return (
    <div className="relative h-[500px] w-full">
      <OptimizedImage
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-center">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
} 