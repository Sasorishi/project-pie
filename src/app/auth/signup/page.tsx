// src/app/auth/signup/page.tsx

import AuthRedirect from "@/hooks/authRedirect";
import { AuthProvider } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import ClientComponent from "./client";
import importDarkLogo from "/public/images/icon/logo-dark.png";

const SignUpPage = () => {
  return (
    <AuthProvider>
      <AuthRedirect>
        <div className="flex h-screen items-center justify-center">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-wrap items-center">
              <div className="hidden w-full xl:block xl:w-1/2">
                <div className="px-26 py-17.5 text-center">
                  <Link className="mb-5.5 inline-block" href="/">
                    <Image
                      className="hidden dark:block"
                      src={"/images/logo/logo.svg"}
                      alt="Logo"
                      width={176}
                      height={32}
                    />
                    <Image
                      className="dark:hidden"
                      src={importDarkLogo.src}
                      alt="Logo"
                      width={280}
                      height={60}
                    />
                  </Link>
                  <p className="2xl:px-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    suspendisse.
                  </p>
                </div>
              </div>
              <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                  <ClientComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthRedirect>
    </AuthProvider>
  );
};

export default SignUpPage;
