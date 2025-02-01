import Image from 'next/image';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Discover Premium Wines
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our wine club and explore a curated selection of the finest wines delivered to your doorstep.
          </p>
          <div className="flex space-x-4">
            <Button variant="primary">Join Now</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80"
            alt="Premium Wine Selection"
            priority
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}; 