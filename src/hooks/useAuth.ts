import { useSession, signIn, signOut } from 'next-auth/react';

interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export const useAuth = () => {
  const { data: session, status } = useSession();

  const user: User | null = session?.user ? {
    id: session.user.id || '',
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
  } : null;

  const isAuthenticated = status === 'authenticated';
  const isLoading = status === 'loading';

  return {
    user,
    isAuthenticated,
    isLoading,
    signIn,
    signOut,
  };
}; 