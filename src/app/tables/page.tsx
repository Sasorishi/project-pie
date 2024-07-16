import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import ProtectedRoute from '@/components/Hoc/ProtectedRoute';

import DefaultLayout from '@/components/Layouts/DefaultLayout';
import TableInvestement from '@/components/Tables/TableInvestment';
import { AuthProvider } from '@/hooks/useAuth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Tables | TailAdmin - Next.js Dashboard Template',
  description:
    'This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template',
};

const TablesPage = () => {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <DefaultLayout>
          <Breadcrumb pageName="Enteprises" />
          <div className="flex flex-col gap-10">
            <TableInvestement />
          </div>
        </DefaultLayout>
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default TablesPage;
