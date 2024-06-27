"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CompanyDetails from "@/components/CompanyDetails";
import axios from "axios";

// const entreprises = [
//   {
//     id: "1",
//     name: "NeuroTech AI",
//     ceo: "Jane Doe",
//     email: "contact@neurotech.ai",
//     sector: "Intelligence Artificielle",
//     marketPositioning: "up",
//     SIREN: "123456789",
//     SIRET: "12345678900012",
//     legalStatus: "SARL",
//     creationDate: "25 Avril, 2018",
//     size: 50,
//     growthData: {
//       funding: [
//         300000, 250000, 200000, 350000, 400000, 250000, 300000, 250000, 200000,
//         350000, 400000, 250000,
//       ],
//       revenue: [
//         150000, 200000, 250000, 300000, 350000, 300000, 250000, 200000, 250000,
//         300000, 350000, 300000,
//       ],
//     },
//   },
//   {
//     id: "2",
//     name: "EcoDrive Innovations",
//     ceo: "Alice Johnson",
//     email: "info@ecodrive.com",
//     sector: "Technologie Durable",
//     marketPositioning: "neutral",
//     SIREN: "987654321",
//     SIRET: "98765432100034",
//     legalStatus: "SAS",
//     creationDate: "15 Septembre, 2017",
//     size: 30,
//     growthData: {
//       funding: [
//         100000, 150000, 200000, 250000, 300000, 150000, 100000, 150000, 200000,
//         250000, 300000, 150000,
//       ],
//       revenue: [
//         50000, 100000, 150000, 200000, 250000, 200000, 150000, 100000, 150000,
//         200000, 250000, 200000,
//       ],
//     },
//   },
//   {
//     id: "3",
//     name: "Quantum Solutions",
//     ceo: "John Smith",
//     email: "support@quantumsolutions.com",
//     sector: "Informatique Quantique",
//     marketPositioning: "down",
//     SIREN: "456789123",
//     SIRET: "45678912300056",
//     legalStatus: "SA",
//     creationDate: "10 Novembre, 2019",
//     size: 70,
//     growthData: {
//       funding: [
//         200000, 250000, 300000, 350000, 400000, 350000, 300000, 250000, 200000,
//         250000, 300000, 350000,
//       ],
//       revenue: [
//         100000, 150000, 200000, 250000, 300000, 250000, 200000, 150000, 100000,
//         150000, 200000, 250000,
//       ],
//     },
//   },
// ];

const calculateShareCapital = (growthData: any) => {
  const totalFunding = growthData.funding.reduce(
    (acc: any, val: any) => acc + val,
    0,
  );
  const totalRevenue = growthData.revenue.reduce(
    (acc: any, val: any) => acc + val,
    0,
  );
  return totalFunding + totalRevenue;
};

const CompanyPage = () => {
  const searchParams = useSearchParams();
  const siren = searchParams.get("id");
  const [company, setCompany] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCompanyDetails = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        console.log(apiUrl);
        const response = await axios.get(
          `${apiUrl}/api/companies/${siren}/details`,
        );

        if (response.status === 200) {
          const data = response.data;
          console.log(data);
          setCompany(data);
        } else {
          console.error("Erreur lors de requête api");
        }
      } catch (error) {
        console.error("Erreur lors de requête api", error);
      } finally {
        setLoading(false);
      }
    };

    getCompanyDetails();
  });

  if (!company) {
    return <div>Entreprise non trouvée</div>;
  }

  return <CompanyDetails data={company} />;
};

export default CompanyPage;
