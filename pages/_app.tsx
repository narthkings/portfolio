import type {AppProps} from "next/app";
import "../styles/globals.css";
import {ChakraProvider} from "@chakra-ui/react";
import {customTheme} from "../styles/themes";
import {NextPageWithLayout} from "../types";
import "@fontsource/outfit/400.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
