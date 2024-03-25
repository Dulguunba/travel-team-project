import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TravelDataContextFunction } from "@/components/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TravelDataContextFunction>
      <Component {...pageProps} />
    </TravelDataContextFunction>
  );
}
