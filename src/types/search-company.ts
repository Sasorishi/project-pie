type Beneficiaire = {
  dateDeNaissance: string;
  nom: string;
  prenoms: string[];
  nationalite: string;
};

type Adresse = {
  pays: string;
  codePostal: string;
  commune: string;
  typeVoie: string;
  voie: string;
  numVoie: string;
};

type Activite = {
  dateDebut: string;
  formeExercice: string;
  descriptionDetaillee: string;
  codeApe: string;
};

export type SearchCompany = {
  updatedAt: string;
  denomination: string;
  nombreBeneficiairesEffectifsActifs: number;
  societeEtrangere: boolean;
  etablieEnFrance: boolean;
  formeJuridique: string;
  formeExerciceActivitePrincipale: string;
  beneficiairesEffectifs: Beneficiaire[];
  siret: string;
  adresse: Adresse;
  activites: Activite[];
  montantCapital: number;
  deviseCapital: string;
};
