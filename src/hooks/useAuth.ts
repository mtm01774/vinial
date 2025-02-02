import { useSession } from 'next-auth/react';
import { User } from '../types/user';

export function useAuth() {
  const { data: session } = useSession();

  const user: User | null = session?.user ? {
    name: session.user.name || '',
    email: session.user.email || '',
    image: session.user.image || null,
  } : null;

  return {
    user,
    isAuthenticated: !!session,
  };
} 