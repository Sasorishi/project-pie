"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

// Types
type Investment = {
  id: string;
  startupName: string;
  investmentAmount: number;
  investmentDate: string;
  investmentStatus: "Actif" | "Sorti" | "En attente";
};

// Données fictives
const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomStatus = (): string => {
  const statuses: string[] = ["En attente", "Actif", "Sortie"];
  const randomIndex: number = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

const generateRandomDate = () => {
  const startYear = 2020;
  const currentYear = new Date().getFullYear();

  const year = getRandomInt(startYear, currentYear);
  const monthIndex = getRandomInt(0, 11);

  const months = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];

  const month = months[monthIndex];
  const day = getRandomInt(1, 28);
  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
};

// const investmentsData: Investment[] = [
//   {
//     id: "1",
//     startupName: "NeuroTech AI",
//     investmentAmount: 3000000,
//     investmentDate: "20 Fév, 2023",
//     investmentStatus: "Actif",
//   },
//   {
//     id: "2",
//     startupName: "EcoDrive Innovations",
//     investmentAmount: 1500000,
//     investmentDate: "15 Jan, 2024",
//     investmentStatus: "En attente",
//   },
//   {
//     id: "3",
//     startupName: "Quantum Solutions",
//     investmentAmount: 2500000,
//     investmentDate: "11 Mar, 2023",
//     investmentStatus: "Sorti",
//   },
// ];

const TableInvestissement = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        console.log(apiUrl);
        const response = await axios.get(`${apiUrl}/api`);

        if (response.status === 200) {
          const data = response.data;
          setCompanies(data);
        } else {
          console.error("Erreur lors de requête api");
        }
      } catch (error) {
        console.error("Erreur lors de requête api", error);
      } finally {
        setLoading(false);
      }
    };

    getCompanies();
  }, []);

  return (
    <div className="border-gray-300 rounded-sm border bg-white p-6 shadow-lg">
      <div className="max-w-full overflow-x-auto">
        {!loading ? (
          companies.length > 0 ? (
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-6 py-4 font-semibold">Entreprise</th>
                  <th className="px-6 py-4 font-semibold">
                    Montant de l&apos;investissement
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Date de l&apos;investissement
                  </th>
                  <th className="px-6 py-4 font-semibold">Statut</th>
                  <th className="px-6 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company, index) => (
                  <tr key={index} className="border-gray-200 border-b">
                    <td className="px-6 py-4">{company.nomCommercial}</td>
                    <td className="px-6 py-4">
                      {/* Demo Random Value */}
                      {getRandomInt(1000, 4000).toLocaleString()} €
                    </td>
                    <td className="px-6 py-4">{generateRandomDate()}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          getRandomStatus() === "Actif"
                            ? "bg-green-200 text-green-700"
                            : getRandomStatus() === "Sorti"
                              ? "bg-red-200 text-red-700"
                              : "bg-yellow-200 text-yellow-700"
                        }`}
                      >
                        {/* Demo Random Value */}
                        {getRandomStatus()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/entreprises?id=${company.siren}`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Voir
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="w-full text-center">
              <p>Aucun entreprises trouvée</p>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default TableInvestissement;
