import { PropsWithChildren } from "react";
import Header from "@/components/sections/Header";

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
