import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };

    setTimeout(handleComplete, 3000);

    return () => {
      clearTimeout(handleComplete);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 100,
      delay: 0,
      duration: 900,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <Preloader isLoading={isLoading} />
      <Header />
      {!isLoading && (
        <main id="site-wrapper">
          <Component {...pageProps} />
        </main>
      )}
      <Footer />
    </>
  );
}
