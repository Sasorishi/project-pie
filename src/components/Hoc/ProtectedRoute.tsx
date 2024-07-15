'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        console.log('User is not authenticated, redirecting...');
        router.push('/auth/signin');
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
