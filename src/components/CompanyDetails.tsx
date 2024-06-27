import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface GrowthData {
  funding: number[];
  revenue: number[];
}

// interface Company {
//   name: string;
//   ceo: string;
//   email: string;
//   sector: string;
//   marketPositioning: string;
//   SIREN: string;
//   SIRET: string;
//   legalStatus: string;
//   creationDate: string;
//   shareCapital: number;
//   size: number;
//   growthData: GrowthData;
// }

// interface StartupDetailsProps {
//   startup: Startup;
// }

const CompanyDetails: React.FC = ({ data }) => {
  const getRandomPosition = (): string => {
    const statuses: string[] = ["up", "down", "neutral"];
    const randomIndex: number = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  };

  const getMarketPositioningIcon = (position: string) => {
    if (position === "up") {
      return <span style={{ color: "green" }}>▲</span>;
    } else if (position === "down") {
      return <span style={{ color: "red" }}>▼</span>;
    } else {
      return <span style={{ color: "gray" }}>▶</span>;
    }
  };

  // Configuration du graphique
  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#00E396", "#008FFB"],
    stroke: {
      width: [2, 2],
    },
    title: {
      text: "Aperçu Financier",
      align: "left",
    },
    xaxis: {
      categories: [
        "Jan",
        "Fév",
        "Mar",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Aout",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: [
      {
        title: {
          text: "Financement (€)",
        },
      },
      {
        opposite: true,
        title: {
          text: "Revenus (€)",
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  const chartSeries = [
    {
      name: "Financement",
      type: "area",
      data: [
        300000, 250000, 200000, 350000, 400000, 250000, 300000, 250000, 200000,
        350000, 400000, 250000,
      ],
    },
    {
      name: "Revenus",
      type: "bar",
      data: [
        150000, 200000, 250000, 300000, 350000, 300000, 250000, 200000, 250000,
        300000, 350000, 300000,
      ],
    },
  ];

  const filteredInformations = {
    lastname:
      data.formality.content.personnePhysique.identite.entrepreneur
        .descriptionPersonne.nom ?? null,
    firstname: data.formality.content.personnePhysique.identite.entrepreneur
      .descriptionPersonne.prenoms
      ? data.formality.content.personnePhysique.identite.entrepreneur.descriptionPersonne.prenoms.join(
          ", ",
        )
      : null,
    dateStartActivity:
      data.formality.content.personnePhysique.etablissementPrincipal
        .activites[0].dateDebut ?? null,
    dateCreated: data.formality.content.natureCreation.dateCreation ?? null,
    siren: data.siren ?? null,
    siret:
      data.formality.content.personnePhysique.etablissementPrincipal
        .descriptionEtablissement.siret ?? null,
    formeMainActivity:
      data.formality.content.formeExerciceActivitePrincipale ?? null,
    descriptionActivity:
      data.formality.content.personnePhysique.etablissementPrincipal
        .activites[0].descriptionDetaillee ?? null,
    codeApe:
      data.formality.content.personnePhysique.etablissementPrincipal
        .descriptionEtablissement.codeApe ?? null,
    denomination:
      data.formality.content.personnePhysique.etablissementPrincipal
        .descriptionEtablissement.nomCommercial ?? null,
    numStreet:
      data.formality.content.personnePhysique.etablissementPrincipal.adresse
        .numVoie ?? null,
    typeStreet:
      data.formality.content.personnePhysique.etablissementPrincipal.adresse
        .typeVoie ?? null,
    nameStreet:
      data.formality.content.personnePhysique.etablissementPrincipal.adresse
        .voie ?? null,
    country:
      data.formality.content.personnePhysique.etablissementPrincipal.adresse
        .pays ?? null,
    codePostal:
      data.formality.content.personnePhysique.etablissementPrincipal.adresse
        .codePostal ?? null,
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb pageName="Détails de l'entreprise" />
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-gray-900 text-lg font-medium leading-6">
              {data.name}
            </h3>
            <p className="text-gray-500 mt-1 max-w-2xl text-sm">
              Détails de performance et de croissance.
            </p>
          </div>
          <div className="border-gray-200 border-t px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">
                    Nom commercial
                  </dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {filteredInformations.denomination}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">
                    Siège social
                  </dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {filteredInformations.numStreet}{" "}
                    {filteredInformations.typeStreet}{" "}
                    {filteredInformations.nameStreet},{" "}
                    {filteredInformations.codePostal}{" "}
                    {filteredInformations.country}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">PDG</dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {filteredInformations.lastname}{" "}
                    {filteredInformations.firstname}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">Email</dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {data.email ?? null}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">Secteur</dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {data.sector ?? null}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">
                    Description activité
                  </dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {filteredInformations.descriptionActivity}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">
                    Forme exercice principale
                  </dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {filteredInformations.formeMainActivity}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">
                    Positionnement sur le marché
                  </dt>
                  <dd className="text-gray-900 mt-1 text-sm capitalize">
                    {getMarketPositioningIcon(getRandomPosition())}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">SIREN</dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {filteredInformations.siren}
                  </dd>
                </div>
              </div>
              <div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">
                    Code APE
                  </dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {filteredInformations.codeApe}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">SIRET</dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {filteredInformations.siret}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">
                    Statut Juridique
                  </dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {data.formality.formeJuridique ?? null}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">
                    Date de Création
                  </dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {filteredInformations.dateCreated}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">
                    Date de début activité
                  </dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {filteredInformations.dateStartActivity}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">
                    Capital Social
                  </dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {data.shareCapital ?? null} €
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-gray-500 text-sm font-medium">Taille</dt>
                  <dd className="text-gray-900 mt-1 text-sm">
                    {data.size ?? null} employés
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={350}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CompanyDetails;
