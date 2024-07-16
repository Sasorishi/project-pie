'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface AuthRedirectProps {
  children: ReactNode;
}

const AuthRedirect = ({ children }: AuthRedirectProps) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div></div>;
  }

  if (!user && !loading) {
    return <>{children}</>;
  }

  return null;
};

export default AuthRedirect;
