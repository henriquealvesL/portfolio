import { Providers } from "./providers";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Henrique Alves",
  description: "Henrique Alves' personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={vt323.className}>
      <Providers>{children}</Providers>
    </html>
  );
}
