// src/pages/index.tsx
import { Metadata } from 'next';

import AuthLayout from '@/components/Layouts/AuthLayout';
import { AuthProvider } from '@/hooks/useAuth';

import SignIn from './auth/signin/page';

export const metadata: Metadata = {
  title: 'Project PIE Dashboard',
  description: 'This is Next.js with TailAdmin Dashboard Template',
};

export default function Home() {
  return (
    <>
      <AuthProvider>
        <AuthLayout>
          <SignIn />
        </AuthLayout>
      </AuthProvider>
    </>
  );
}
