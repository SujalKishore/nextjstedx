import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeaderMob from "@/components/HeaderMob/HeaderMob";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // Initial check

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {isMobile ? <HeaderMob /> : <Header />}

      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
