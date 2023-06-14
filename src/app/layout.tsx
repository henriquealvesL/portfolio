import StyledComponentsRegistry from "../../lib/registry";

import { Providers } from "../components/Providers/providers";
import { VT323 } from "next/font/google";

import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfólio | Henrique Alves",
  description:
    "Desenvolvedor Full-Stack  com experiências em JavaScript, TypeScript, React, Next.js, Node.js, PostgreSQL e APIs Rest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={vt323.className}>
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
