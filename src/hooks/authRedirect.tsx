"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface AuthRedirectProps {
  children: ReactNode;
}

const AuthRedirect = ({ children }: AuthRedirectProps) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      console.log("User is authenticated, redirecting...");
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  return <>{children}</>;
};

export default AuthRedirect;
