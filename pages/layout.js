import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header/>
        <main className="w-full bg-white mt-10 m-2 relative">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p className="text-xs font-bold text-blue-600">
            Copyright © 2023 Amazona
          </p>
        </footer>
      </div>
    </>
  );
}
export default Layout;
