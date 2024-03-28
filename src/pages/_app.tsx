import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TravelDataContextFunction } from "@/components/context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TravelDataContextFunction>
      <Component {...pageProps} />
    </TravelDataContextFunction>
  );
}
