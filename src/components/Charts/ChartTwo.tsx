import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

const ChartTwo = () => {
  const data = {
    labels: ['NeuroTech AI', 'EcoDrive Innovations', 'Quantum Solutions'],
    datasets: [
      {
        label: "Montant de l'investissement (€)",
        data: [3000000, 1500000, 2500000],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-semibold mb-4">Investissements</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartTwo;
