// src/app/auth/signin/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
import AuthLayout from "@/components/Layouts/AuthLayout";

const ClientSignIn = dynamic(() => import('./client'), { ssr: false });

export const metadata: Metadata = {
  title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

const SignIn = () => {
  return (
      <AuthLayout>
        <Breadcrumb pageName="Sign In" />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
                </p>
                <span className="mt-15 inline-block">
                {/* SVG content */}
              </span>
              </div>
            </div>
            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <span className="mb-1.5 block font-medium">Start for free</span>
                <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                  Sign In to TailAdmin
                </h2>
                <ClientSignIn />
                <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                <span>
                  {/* Google Sign In SVG */}
                </span>
                  Sign in with Google
                </button>
                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{" "}
                    <Link href="/auth/signup" className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
  );
};

export default SignIn;
