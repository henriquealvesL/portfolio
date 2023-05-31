import StyledComponentsRegistry from "../../lib/registry";
import "./globals.css";

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
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
