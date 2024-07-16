'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/auth/signin');
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return <div></div>;
  }

  if (user && !loading) {
    return <>{children}</>;
  }

  return null;
};

export default ProtectedRoute;
