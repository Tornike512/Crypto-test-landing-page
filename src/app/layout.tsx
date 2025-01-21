import { PropsWithChildren } from "react";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: PropsWithChildren<React.ReactNode>) {
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
