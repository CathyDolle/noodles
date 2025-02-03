import type { Metadata } from "next";
import { neuemontreal } from "@/fonts/NeueMontreal";
import { iowan } from "@/fonts/Iowan";
import "@/style/globals.scss";
import {
  Lenis,
  Grid,
  Header,
  Footer,
  GsapScrollTrigger,
} from "@/ui/components";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "La maison des nouilles",
  description: "Restaurant de nouilles faites maison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neuemontreal.variable}  ${iowan.variable} overflow-x-hidden bg-beige text-blue antialiased`}
      >
        <main id="content" tabIndex={-1}>
          {children}
        </main>
        <Grid />
        <GsapScrollTrigger />
        <Lenis key={`lenis${(children as React.ReactElement)?.key}`} />
      </body>
    </html>
  );
}
