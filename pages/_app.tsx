import "../styles/globals.css";
import "../styles/inputPhoneNumber.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Theme from "@shared/globalTheme/theme";
import { GlobalStyle } from "@shared/globalStyle/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Team Augmentation | Luby</title>
        <meta
          name="description"
          content="Immediately available personnel and custom-made sourcing process, all with the same quality level of Luby's more than 20 years of experience in IT projects across several industries, both domestically and internationally."
        />
        <meta name="author" content="Luby Software" />
        <link rel="icon" href="/assets/company-icons/luby-icon.webp" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
