const BeneficiariesCard = ({ beneficiaries }: { beneficiaries: any[] }) => {
  return (
    <div className="mt-5 bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Bénéficiaires effectifs
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Détails des bénéficiaires effectifs.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {beneficiaries.map((beneficiaire, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
                  : 'bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
              }
            >
              {beneficiaire.nom && (
                <>
                  <dt className="text-sm font-medium text-gray-500">Nom</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {beneficiaire.nom}
                  </dd>
                </>
              )}
              {beneficiaire.prenoms.length > 0 && (
                <>
                  <dt className="text-sm font-medium text-gray-500">Prénoms</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {beneficiaire.prenoms.join(', ')}
                  </dd>
                </>
              )}
              {beneficiaire.dateDeNaissance && (
                <>
                  <dt className="text-sm font-medium text-gray-500">
                    Date de naissance
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {beneficiaire.dateDeNaissance}
                  </dd>
                </>
              )}
              {beneficiaire.nationalite && (
                <>
                  <dt className="text-sm font-medium text-gray-500">
                    Nationalité
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {beneficiaire.nationalite}
                  </dd>
                </>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default BeneficiariesCard;
