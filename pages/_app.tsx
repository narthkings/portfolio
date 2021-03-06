import { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { customTheme } from "../styles/themes";
import { NextPageWithLayout } from "../types";
import "@fontsource/outfit/400.css";
import AOS from "aos";
import "aos/dist/aos.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const client = new ApolloClient({
  uri: process.env.APOLLO_CLIENT_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ApolloProvider client={client}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
