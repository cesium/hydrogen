import "./globals.css";
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import type { Locale } from "@/internationalization/dictionaries";
import { DictionaryProvider } from "@/contexts/dictionary-provider";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title:
    "CeSIUM - Centro de Estudantes de Engenharia Informática da Universidade do Minho",
  description:
    "O CeSIUM é um Centro de estudantes de Engenharia Informática da Universidade do Minho composto por alunos voluntários que têm como objectivo principal representar e promover o curso. É um núcleo unido e dinâmico capaz de proporcionar experiências únicas e enriquecedoras para a tua futura vida profissional.",
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{ children: React.ReactNode; params: { lang: Locale } }>) {
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${orbitron.variable} overflow-x-hidden bg-background font-sans text-black antialiased`}
      >
        <DictionaryProvider lang={lang}>
          <Navbar />
          <div className="px-5 py-5 md:px-7 md:pb-14 md:pt-12">{children}</div>
        </DictionaryProvider>
      </body>
    </html>
  );
}
