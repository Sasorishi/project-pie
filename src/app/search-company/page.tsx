'use client';

import { Spin } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import ProtectedRoute from '@/components/Hoc/ProtectedRoute';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { openNotificationWithIcon } from '@/components/Notification/NotifAlert';
import ActivitiesCard from '@/components/SearchCompany/ActivitiesCard';
import BeneficiariesCard from '@/components/SearchCompany/BeneficiariesCard';
import CompanyInfoCard from '@/components/SearchCompany/CompanyInfoCard';
import FinancesCard from '@/components/SearchCompany/FinancesCard';
import { AuthProvider } from '@/hooks/useAuth';
import { SearchCompany } from '@/types/search-company';

const isEmptyObject = (obj: any): boolean => {
  return (
    obj &&
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.keys(obj).length === 0
  );
};

const getValue = (field: any, fallback: any) => {
  return isEmptyObject(field) ? fallback : field;
};

const CompanyDetails = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const siren = searchParams.get('siren') || '';
  const [company, setCompany] = useState<SearchCompany | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      if (siren) {
        setCompany(null);
        setLoading(true);
        setPercent(0);

        timerRef.current = setInterval(() => {
          setPercent(prev => (prev < 90 ? prev + 10 : prev));
        }, 100);

        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/company/${siren}/details`,
          );

          const data = await response.json();

          if (
            typeof data === 'string' &&
            data.includes('Erreur lors de la récupération des données')
          ) {
            throw new Error(data);
          }

          const montantCapital = getValue(
            data.montantCapital,
            data.capitalMinimum,
          );

          const formattedCompany = {
            updatedAt: getValue(data.updatedAt, ''),
            denomination: getValue(data.denomination, ''),
            nombreBeneficiairesEffectifsActifs: getValue(
              data.nombreBeneficiairesEffectifsActifs,
              0,
            ),
            societeEtrangere: getValue(data.societeEtrangere, false),
            etablieEnFrance: getValue(data.etablieEnFrance, false),
            formeJuridique: getValue(data.formeJuridique, ''),
            formeExerciceActivitePrincipale: getValue(
              data.formeExerciceActivitePrincipale,
              '',
            ),
            beneficiairesEffectifs: Array.isArray(data.beneficiairesEffectifs)
              ? data.beneficiairesEffectifs.map(
                  (benef: {
                    beneficiaire: {
                      descriptionPersonne: {
                        dateDeNaissance: string;
                        nom: string;
                        prenoms: string[];
                        nationalite: string;
                      };
                    };
                  }) => ({
                    dateDeNaissance: getValue(
                      benef.beneficiaire.descriptionPersonne.dateDeNaissance,
                      '',
                    ),
                    nom: getValue(
                      benef.beneficiaire.descriptionPersonne.nom,
                      '',
                    ),
                    prenoms: getValue(
                      benef.beneficiaire.descriptionPersonne.prenoms,
                      [],
                    ),
                    nationalite: getValue(
                      benef.beneficiaire.descriptionPersonne.nationalite,
                      '',
                    ),
                  }),
                )
              : [],
            siret: getValue(data.siret, ''),
            adresse: {
              pays: getValue(data.adresse?.pays, ''),
              codePostal: getValue(data.adresse?.codePostal, ''),
              commune: getValue(data.adresse?.commune, ''),
              typeVoie: getValue(data.adresse?.typeVoie, ''),
              voie: getValue(data.adresse?.voie, ''),
              numVoie: getValue(data.adresse?.numVoie, ''),
            },
            activites: Array.isArray(data.activites)
              ? data.activites.map(
                  (act: {
                    dateDebut: string;
                    formeExercice: string;
                    descriptionDetaillee: string;
                    codeApe: string;
                  }) => ({
                    dateDebut: getValue(act.dateDebut, ''),
                    formeExercice: getValue(act.formeExercice, ''),
                    descriptionDetaillee: getValue(
                      act.descriptionDetaillee,
                      '',
                    ),
                    codeApe: getValue(act.codeApe, ''),
                  }),
                )
              : [],
            montantCapital: getValue(montantCapital, ''),
            deviseCapital: getValue(data.deviseCapital, ''),
          };

          clearInterval(timerRef.current);
          setPercent(100);

          setTimeout(() => {
            setCompany(formattedCompany);
            setLoading(false);
          }, 100);
        } catch (error) {
          console.log(true);
          clearInterval(timerRef.current);
          setPercent(100);
          setTimeout(() => {
            openNotificationWithIcon(
              'error',
              'Erreur de récupération',
              "Le SIREN est incorrect ou n'existe pas.",
            );
            setLoading(false);
            router.back();
          }, 100);
        }
      }
    };

    fetchCompanyDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siren]);

  if (!company || loading) {
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
          </div>
        </DefaultLayout>
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default CompanyDetails;
