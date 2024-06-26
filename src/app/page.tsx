import ECommerce from "@/components/Dashboard/Board";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {AuthProvider} from "@/hooks/useAuth";
import SignUpPage from "@/app/auth/signup/page";
import AuthLayout from "@/components/Layouts/AuthLayout";
import SignIn from "@/app/auth/signin/page";

export const metadata: Metadata = {
  title: "Project PIE Dashboard",
  description: "This is Next.js with TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
    <AuthProvider>
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    </AuthProvider>
    </>
  );
}
