export interface Wine {
  id: number;
  name: string;
  region: string;
  price: number;
  image: string;
  description: string;
  type: 'red' | 'white' | 'sparkling' | 'rose';
  year: number;
  rating: number;
  stock: number;
} 