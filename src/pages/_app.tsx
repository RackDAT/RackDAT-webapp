import React, { ReactComponentElement } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import { AppProps } from "next/app";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useEffect } from "react";
import "react-day-picker/dist/style.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return (
    <UserProvider>
      <GoogleOAuthProvider clientId="725135857969-a89noc2hr9fjfhmdrnk10vpg977e9i15.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </UserProvider>
  );
}
