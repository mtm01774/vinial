import Image from 'next/image';
import { CSSProperties } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  width?: number;
  height?: number;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  fill = false,
  sizes,
  quality = 85,
  width,
  height
}: OptimizedImageProps) {
  const containerStyle: CSSProperties | undefined = fill ? { position: 'relative', height: '100%' } : undefined;

  return (
    <div style={containerStyle} className={fill ? 'relative h-full' : undefined}>
      <Image
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ease-in-out`}
        fill={fill}
        sizes={sizes}
        quality={quality}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        style={fill ? { objectFit: 'cover' } : undefined}
        unoptimized
      />
    </div>
  );
} 