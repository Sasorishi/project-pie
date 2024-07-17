'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import ProtectedRoute from '@/components/Hoc/ProtectedRoute';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
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
  const siren = searchParams.get('siren') || '';
  const [company, setCompany] = useState<SearchCompany | null>(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      if (siren) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/company/${siren}/details`,
        );
        const data = await response.json();

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
                  nom: getValue(benef.beneficiaire.descriptionPersonne.nom, ''),
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
                  descriptionDetaillee: getValue(act.descriptionDetaillee, ''),
                  codeApe: getValue(act.codeApe, ''),
                }),
              )
            : [],
          montantCapital: getValue(montantCapital, ''),
          deviseCapital: getValue(data.deviseCapital, ''),
        };

        setCompany(formattedCompany);
      }
    };

    fetchCompanyDetails();
  }, [siren]);

  if (!company) {
    return <div>Loading...</div>;
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
