import React, { ReactComponentElement } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
