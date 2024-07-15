import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface GrowthData {
  funding: number[];
  revenue: number[];
}

interface Startup {
  name: string;
  ceo: string;
  email: string;
  sector: string;
  marketPositioning: string;
  SIREN: string;
  SIRET: string;
  legalStatus: string;
  creationDate: string;
  shareCapital: number;
  size: number;
  growthData: GrowthData;
}

interface StartupDetailsProps {
  startup: Startup;
}

const StartupDetails: React.FC<StartupDetailsProps> = ({ startup }) => {
  const getMarketPositioningIcon = (position: string) => {
    if (position === 'up') {
      return <span style={{ color: 'green' }}>▲</span>;
    } else if (position === 'down') {
      return <span style={{ color: 'red' }}>▼</span>;
    } else {
      return <span style={{ color: 'gray' }}>▶</span>;
    }
  };

  // Configuration du graphique
  const chartOptions: ApexOptions = {
    chart: {
      type: 'line',
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ['#00E396', '#008FFB'],
    stroke: {
      width: [2, 2],
    },
    title: {
      text: 'Aperçu Financier',
      align: 'left',
    },
    xaxis: {
      categories: [
        'Jan',
        'Fév',
        'Mar',
        'Avr',
        'Mai',
        'Juin',
        'Juil',
        'Aout',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: [
      {
        title: {
          text: 'Financement (€)',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Revenus (€)',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      horizontalAlign: 'left',
    },
  };

  const chartSeries = [
    {
      name: 'Financement',
      type: 'area',
      data: startup.growthData.funding,
    },
    {
      name: 'Revenus',
      type: 'bar',
      data: startup.growthData.revenue,
    },
  ];

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb pageName="Détails de la Startup" />
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {startup.name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Détails de performance et de croissance.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">PDG</dt>
                  <dd className="mt-1 text-sm text-gray-900">{startup.ceo}</dd>
                </div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {startup.email}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">Secteur</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {startup.sector}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Positionnement sur le marché
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {getMarketPositioningIcon(startup.marketPositioning)}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">SIREN</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {startup.SIREN}
                  </dd>
                </div>
              </div>
              <div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">SIRET</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {startup.SIRET}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Statut Juridique
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {startup.legalStatus}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Date de Création
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {startup.creationDate}
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Capital Social
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {startup.shareCapital.toLocaleString()} €
                  </dd>
                </div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">Taille</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {startup.size} employés
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

export default StartupDetails;
