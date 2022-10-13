import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Head from "next/head";
import "../styles/main.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
    const lightTheme = createTheme({
        type: "light",
    });

    const darkTheme = createTheme({
        type: "dark",
    });

    return (
        <NextThemesProvider
            defaultTheme="light"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className,
            }}
        >
            <NextUIProvider>
                <Head>
                    <title>Zoclhas | Web Dev & Material Artist</title>
                    <meta
                        name="title"
                        content="Zoclhas | Web Dev & Material Artist"
                    />
                    <meta
                        name="description"
                        content="I am a freelance Web Dev & Material Artist based in the UK. This is my portfolio site- Hope you enjoy it :)"
                    />
                    <meta
                        name="keywords"
                        content="zoclhas, zaura, webdev, material"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta
                        http-equiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta name="language" content="English" />
                    <meta name="author" content="Zoclhas" />
                    <meta
                        property="og:title"
                        content="Zoclhas | Web Dev & Material Artist"
                    />
                    <meta
                        property="og:description"
                        content="I am a freelance Web Dev & Material Artist based in the UK. This is my portfolio site- Hope you enjoy it :)"
                    />
                    <meta property="og:url" content="https://zoclhas.com/" />
                    <meta
                        property="og:image"
                        content="https://zoclhas.com/meta-img.png"
                    />
                </Head>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </NextUIProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
