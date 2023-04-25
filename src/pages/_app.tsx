import React, { ReactComponentElement } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";

type props = {
  Component: any;
  pageProps: React.ComponentType;
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: props) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
