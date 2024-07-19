'use client';

import { Spin } from 'antd';
import { useSearchParams } from 'next/navigation';

import ProtectedRoute from '@/components/Hoc/ProtectedRoute';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import ActivitiesCard from '@/components/SearchCompany/ActivitiesCard';
import BeneficiariesCard from '@/components/SearchCompany/BeneficiariesCard';
import CompanyInfoCard from '@/components/SearchCompany/CompanyInfoCard';
import FinancesCard from '@/components/SearchCompany/FinancesCard';
import { AuthProvider } from '@/hooks/useAuth';
import useCompanyDetails from '@/hooks/useCompanyDetails';

const CompanyDetails = () => {
  const searchParams = useSearchParams();
  const siren = searchParams.get('siren') || '';
  const { company, loading, percent } = useCompanyDetails(siren);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <Spin size="large" style={{ fontSize: '32px' }} />
          <div className="mt-4 text-2xl">Recherche en cours... {percent}%</div>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <ProtectedRoute>
        <DefaultLayout>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {company && (
              <>
                <CompanyInfoCard company={company} siren={siren} />
                <ActivitiesCard activities={company.activites} />
                {company.beneficiairesEffectifs.length > 0 && (
                  <BeneficiariesCard
                    beneficiaries={company.beneficiairesEffectifs}
                  />
                )}
                <FinancesCard
                  capital={company.montantCapital}
                  currency={company.deviseCapital}
                />
              </>
            )}
          </div>
        </DefaultLayout>
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default CompanyDetails;
