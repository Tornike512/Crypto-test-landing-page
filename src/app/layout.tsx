import { PropsWithChildren } from "react";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
