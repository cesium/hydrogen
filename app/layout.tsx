import "./globals.css";
import { Inter, Orbitron } from "@next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--orbitron-font" });

export const metadata = {
  title: "Hydrogen",
  description: "CeSIUM landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
