import ECommerce from "@/components/Dashboard/Board";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Project PIE Dashboard",
  description: "This is Next.js with TailAdmin Dashboard Template",
};

export default function Dashboard() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
