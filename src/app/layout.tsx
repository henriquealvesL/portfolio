import StyledComponentsRegistry from "../../lib/registry";

import { Providers } from "../components/Providers/providers";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

const jetbrains = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio | Henrique Alves",
  description:
    "Desenvolvedor Full-Stack  com experiências em JavaScript, TypeScript, React, Next.js, Node.js, PostgreSQL e APIs Rest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={jetbrains.className}>
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
