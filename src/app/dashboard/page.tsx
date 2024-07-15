import ECommerce from '@/components/Dashboard/Board';
import ProtectedRoute from '@/components/Hoc/ProtectedRoute';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { AuthProvider } from '@/hooks/useAuth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project PIE Dashboard',
  description: 'This is Next.js with TailAdmin Dashboard Template',
};

export default function Dashboard() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <DefaultLayout>
          <ECommerce />
        </DefaultLayout>
      </ProtectedRoute>
    </AuthProvider>
  );
}
