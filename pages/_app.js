import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import gamedev from "./gamedev";
import "@/styles/globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer></Footer>
      <ScrollToTopButton></ScrollToTopButton>
    </>
  );
}
