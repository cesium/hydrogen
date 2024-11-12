import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import type { Locale } from "@/internationalization/dictionaries";
import { DictionaryProvider } from "@/contexts/dictionary-provider";
import { getDictionary } from "@/internationalization/dictionaries";

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

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{ children: React.ReactNode; params: { lang: Locale } }>) {
  const dict = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${orbitron.variable} bg-background font-sans text-black antialiased`}
      >
        <DictionaryProvider dict={dict}>{children}</DictionaryProvider>
      </body>
    </html>
  );
}
