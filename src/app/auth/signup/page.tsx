// src/app/auth/signup/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ClientComponent from "./client";
import AuthLayout from "@/components/Layouts/AuthLayout";

const SignUpPage = () => {
  return (
      <AuthLayout>
        <Breadcrumb pageName="Sign Up" />
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
                      src={"/images/logo/logo-dark.svg"}
                      alt="Logo"
                      width={176}
                      height={32}
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
      </AuthLayout>
  );
};

export default SignUpPage;
